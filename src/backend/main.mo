import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
    timestamp : Time.Time;
    id : Nat;
  };

  module Submission {
    public func compareByTimestamp(submission1 : Submission, submission2 : Submission) : Order.Order {
      Nat.compare(submission1.id, submission2.id);
    };
  };

  var nextId = 0;
  let submissions = Map.empty<Nat, Submission>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, service : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      phone;
      service;
      message;
      timestamp = Time.now();
      id = nextId;
    };
    submissions.add(nextId, submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort(Submission.compareByTimestamp);
  };

  public query ({ caller }) func getSubmissionById(id : Nat) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist") };
      case (?submission) { submission };
    };
  };
};

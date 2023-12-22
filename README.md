This API is hosted on onrender at link https://zywa-assignment.onrender.com/api/get_card_status

I have used MongoDb Atlas Database for completing this Assignment.
It has only one collection with Schema:
{
  _id: string,
  cardId: string,
  userContact: string,
  SystemLog: [
    {
      id: string,
      Timestamp: string,
      Comment: string,
    }
  ]
}

Solution Proposed: As the agent gives the cardId or userContact the All the delivery logs will be fetched. As they are all stored in the same document with only one call to Db all the information can be retrived.
The framework used to make this API is Node.js and Express.js, apart from the fact that I am only familiar with this Framework, I find it quite reialble. Speaking about the structural changes the CSV provided has
quite inconsistency which makes it difficult to parse and store in structured data with proper datartypes, I tried parsing the data quite a few times but the Time stamp and contactNumber is never parsed properly.


Possible Improvements: If the CSV files are more structred and consistent, then the a Structred Database can be implemented which can increase efficency and Database consistency. We can structure a data in such a
way that can help both agents and the Company to track the card status.

Although I tried completing the assignment to my best capacity there are some features i wish i could implement but couldn't due to lesser time frame. Also despite of instruction to deploy the Endpoint using Docker,
I have deployed it on onrender.

import React, { Fragment } from "react";

const ChatVisitors = () => {
  const visitors = [
    {
      name: "John Doe",
      lastMessage: "Can you help me with my order?",
      timestamp: "2024-07-31 14:32",
    },
    {
      name: "Jane Smith",
      lastMessage: "I have a question about your services.",
      timestamp: "2024-07-31 13:15",
    },
    {
      name: "Alice Johnson",
      lastMessage: "Looking for product recommendations.",
      timestamp: "2024-07-30 16:45",
    },
    {
      name: "Bob Brown",
      lastMessage: "Where can I find your return policy?",
      timestamp: "2024-07-30 11:20",
    },
    {
      name: "Emily Davis",
      lastMessage: "Need assistance with a refund.",
      timestamp: "2024-07-29 09:10",
    },
    {
      name: "Michael Lee",
      lastMessage: "Query about delivery status.",
      timestamp: "2024-07-28 15:35",
    },
    {
      name: "Sarah Wilson",
      lastMessage: "Interested in bulk purchase options.",
      timestamp: "2024-07-27 12:00",
    },
  ];

  const handleRefresh = () => {
    alert("Chat list refreshed");
  };

  const handleViewChat = (visitorName: string) => {
    alert(`Viewing chat for ${visitorName}`);
  };

  return (
    <Fragment>
      <div className="lg:px-6 py-2 w-full mx-auto h-screen flex flex-col  overflow-y-auto">
        <h3 className="text-2xl font-semibold">Chat with Visitors</h3>
        <div className="flex justify-between items-center ">
          <h4 className="text-xl font-medium">Ongoing Chats</h4>
          <button
            className="px-4 py-2 text-white bg-blue-600 mb-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>
        <div className=" border border-gray-300 bg-white rounded-md overflow-hidden">
          {visitors.length === 0 ? (
            <p className="p-4 text-gray-600">No ongoing chats at the moment.</p>
          ) : (
            visitors.map((visitor, index) => (
              <div
                key={index}
                className=" flex justify-between items-center px-4 py-2 border-b border-gray-300 last:border-b-0"
              >
                <div className="flex-1">
                  <h5 className="text-lg font-semibold">{visitor.name}</h5>
                  <p className="text-gray-700">{visitor.lastMessage}</p>
                </div>
                <span className="text-gray-500 text-sm mr-4">
                  {visitor.timestamp}
                </span>
                <button
                  className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
                  onClick={() => handleViewChat(visitor.name)}
                >
                  View Chat
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ChatVisitors;

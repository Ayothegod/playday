import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { TopBar } from "@/shared/components/TopBar";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Search, Send } from "lucide-react";
import { useState } from "react";

const mockConversations = [
  {
    id: "1",
    name: "John Smith",
    avatar: "👨‍🦱",
    lastMessage: "Cool, see you at 2 PM tomorrow!",
    lastMessageTime: "2 hours ago",
    unread: 0,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "👩‍🦰",
    lastMessage: "Are you coming to the tennis match?",
    lastMessageTime: "1 day ago",
    unread: 1,
  },
  {
    id: "3",
    name: "Mike Davis",
    avatar: "👨‍🦱",
    lastMessage: "You crushed it on the court!",
    lastMessageTime: "3 days ago",
    unread: 0,
  },
];

const mockMessages = [
  {
    id: "1",
    sender: "John Smith",
    avatar: "👨‍🦱",
    text: "Hey! You coming to the basketball game tomorrow?",
    time: "2:30 PM",
    isYou: false,
  },
  {
    id: "2",
    sender: "You",
    avatar: "👤",
    text: "Yeah, definitely! What time?",
    time: "2:35 PM",
    isYou: true,
  },
  {
    id: "3",
    sender: "John Smith",
    avatar: "👨‍🦱",
    text: "2 PM at Central Park. We need one more player",
    time: "2:40 PM",
    isYou: false,
  },
  {
    id: "4",
    sender: "You",
    avatar: "👤",
    text: "Cool, see you at 2 PM tomorrow!",
    time: "2:42 PM",
    isYou: true,
  },
];

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="bg-background min-h-screen">
      <TopBar title="Messages" />

      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 pb-24 h-[calc(100vh-80px)]">
        <div className="grid md:grid-cols-3 gap-6 h-full">
          {/* Conversations List */}
          <div className="md:col-span-1 flex flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-4">Messages</h1>
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40"
                />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2">
              {filteredConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedChat === conv.id
                      ? "bg-primary/20 border-primary/50"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{conv.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold truncate">{conv.name}</div>
                      <div className="text-sm text-foreground/60 truncate">
                        {conv.lastMessage}
                      </div>
                    </div>
                    {conv.unread > 0 && (
                      <div className="bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat View */}
          <div className="md:col-span-2 hidden md:flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/30">
                  <div className="text-4xl">{mockConversations[0].avatar}</div>
                  <div>
                    <h2 className="font-bold">{mockConversations[0].name}</h2>
                    <p className="text-sm text-foreground/60">Online now</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                  {mockMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${msg.isYou ? "justify-end" : "justify-start"}`}
                    >
                      {!msg.isYou && (
                        <div className="text-2xl">{msg.avatar}</div>
                      )}
                      <div
                        className={`${msg.isYou ? "bg-primary text-primary-foreground" : "bg-card text-foreground"} rounded-lg px-4 py-2 max-w-xs`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${msg.isYou ? "text-primary-foreground/70" : "text-foreground/60"}`}
                        >
                          {msg.time}
                        </p>
                      </div>
                      {msg.isYou && (
                        <div className="text-2xl">{msg.avatar}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-card rounded-lg border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50"
                  />
                  <Button className="gap-2">
                    <Send size={18} />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <Card className="bg-card p-8 border-border text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <p className="text-foreground/70">
                    Select a conversation to start messaging
                  </p>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      <FloatingActionButton />
    </main>
  );
}

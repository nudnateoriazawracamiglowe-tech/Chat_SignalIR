# Chat — ASP.NET Core SignalR

Real-time browser chat built with ASP.NET Core SignalR. Messages are broadcast instantly to all connected clients via WebSockets. Implements a `Message` model (User, Text, Timestamp) serialized automatically to JSON. Supports multiple simultaneous browser clients with live message broadcasting via `Clients.All.SendAsync()`.

## How it works

- Client connects to `ChatHub` over a persistent WebSocket connection
- User types a name and message, clicks Send
- JavaScript invokes `SendMessage(user, text)` on the server
- Server creates a `Message` object with a server-side timestamp and broadcasts it to all connected clients
- Every browser receives the message and displays it in real time

## Tech stack

- ASP.NET Core 10
- SignalR (`Microsoft.AspNetCore.SignalR`)
- JavaScript (SignalR client)
- HTML / CSS

## Project structure

```
Chat_SignalIR/
├── ChatHub.cs        # SignalR Hub — handles incoming messages and broadcasts
├── Message.cs        # Data model — User, Text, Timestamp
├── Program.cs        # App setup — registers SignalR and maps the Hub
└── wwwroot/
    ├── index.html    # Chat UI
    └── js/
        ├── ChatHub.js          # SignalR client logic
        └── signalr/            # SignalR browser client library
```

## Running locally

1. Clone the repository
2. Open in Visual Studio 2022
3. Run with `F5` or `Ctrl+F5`
4. Open `http://localhost:5052` in multiple browser windows
5. Type a username and message in each window and send

## Key concepts demonstrated

- Hub-based bidirectional communication over WebSockets
- Server-push via `Clients.All.SendAsync()`
- Object serialization — C# model automatically converted to JSON
- Dependency injection and ASP.NET Core middleware pipeline
- Async/await pattern for non-blocking server calls

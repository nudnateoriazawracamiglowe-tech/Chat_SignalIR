using Microsoft.AspNetCore.SignalR;

namespace Chat_SignalIR
{
    public class ChatHub:Hub
    {
        public  async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}

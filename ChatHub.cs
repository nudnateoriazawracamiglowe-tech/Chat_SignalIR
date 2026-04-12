using Microsoft.AspNetCore.SignalR;

namespace Chat_SignalIR
{
    public class ChatHub:Hub
    {
    
        public async Task SendMessage(string user, string text)
        {
            var msg = new Message
            {
                Timestamp = DateTime.Now,
                User = user,
                Text = text
            }; 
            await Clients.All.SendAsync("ReceiveMessage", msg);
        }
    }
}

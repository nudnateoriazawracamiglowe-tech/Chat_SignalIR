 using Microsoft.AspNetCore.SignalR;


namespace Chat_SignalIR
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddSignalR();
            var app = builder.Build();
            app.UseStaticFiles();
            app.UseFileServer();
            app.MapHub<ChatHub>("/chatHub");
            //app.MapGet("/", () => "Hello World!");

            app.Run();
        }
    }
}

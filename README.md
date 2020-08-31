# Discord-Bot-Template
> A Discord bot template for version 12.3.1

### To create a custom embed using the embed creator use this. 
### (Make sure to replace [parameters] with the parameters!)
```javascript
// Base
let baseEmbed = new this.client.embed().base([parameters]);

message.channel.send(baseEmbed);

// Usage
let usageEmbed = new this.client.embed().base([parameters]);

message.channel.send(usageEmbed);

// Error
let errorEmbed = new this.client.embed().base([parameters]);

message.channel.send(errorEmbed);
```

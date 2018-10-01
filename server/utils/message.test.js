var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        from = "mostafa";
        text = "hi";
        var message = generateMessage(from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe("number");
        expect(message).toMatchObject({from, text});
    });
});


describe('generateLocationMessage', () => {
    it('should generate correct location object',() => {
        from = 'Admin';
        latitude= 15;
        longitude= 19;
        var url = "https://www.google.com/maps?q=15,19";
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe();
        expect(typeof locationMessage.createdAt).toBe("number");

    });
});
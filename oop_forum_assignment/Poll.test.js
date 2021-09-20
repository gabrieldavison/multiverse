const Poll = require('./Poll.js')

test('sets options argument to options property', () => {
    const testPoll = new Poll({
        title: 'Test Poll', 
        text: 'This is a test Poll', 
        options:['option1','option2','option3']
    })

    expect(testPoll.options).toEqual({
        option1: 0,
        option2: 0,
        option3: 0
    })
})

test('incrementOption increase the count of option by 1', () => {
    const testPoll = new Poll({
        title: 'Test Poll', 
        text: 'This is a test Poll', 
        options:['option1','option2','option3']
    })
    testPoll.incrementOption("option1")
    expect(testPoll.options['option1']).toBe(1)
})

test('incrementOption throws error when given invalid option', () => {
    const testPoll = new Poll({
        title: 'Test Poll', 
        text: 'This is a test Poll', 
        options:['option1','option2','option3']
    })
    expect(() => testPoll.incrementOption("invalidOption")).toThrow(Error)

})
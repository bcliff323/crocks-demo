# Maybe Types

JavaScript's dynamic types make it an incredibly flexible language, but there are tradeoffs. It is often difficult to be 100% sure what type you are dealing with while performing a given operation. Traditionally, developers have managed this by tossing statments like this througout their code:

```
typeof name === 'string'
```

But there is a cleaner way! Maybe Types! The Maybe type is an abstraction for defining values that may or may not exist, or that may exist as several different data types.

For this demo, I've chosen to use the [crocks](https://github.com/evilsoft/crocks) library. In crocks, the Maybe object consists of one of two custom data types: `Just` and `Nothing`. Just values are values we want our code to operate on, and Nothings are values we want our code to ignore.

Please see the examples in this demo repo for more context:
[https://github.com/bcliff323/crocks-demo](https://github.com/bcliff323/crocks-demo)

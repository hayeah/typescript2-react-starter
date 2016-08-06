import * as React from "react";

let bye = "bye!";

let n: number;

function blah(n?: number) {
  let b = n + 10;
}

let Foo = <div>Hello World</div>;


// let b = n + 10;

function sendMessage(recipients: string | string[], body: string) {
    if (typeof recipients === "string") {
        // recipients.substring()
        // recipients = recipients.split(",");
    }

    // TypeScript knows that 'recipients' is a 'string[]' here.
    // recipients = recipients.filter(isValidAddress);
    // for (let r of recipients) {
    //     // ...
    // }
}
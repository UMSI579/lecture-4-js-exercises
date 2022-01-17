/**
 * PROBLEM 1
 */
const p1 = document.querySelector("#p1");
if(typeof x !== 'undefined' && x === 3) {
    p1.setAttribute("class", "correct");
    p1.textContent = "x is set to 3";
} else {
    p1.setAttribute("class", "incorrect");
    p1.textContent = typeof x !== 'undefined' ? `x is set to ${x}` : 'x is undefined';
}

/**
 * PROBLEM 2
 */
 const p2 = document.querySelector("#p2");
 if(typeof console.logs[0] !== 'undefined' &&  typeof console.logs[0][0] !== 'undefined' && console.logs[0][0] === 3) {
    p2.setAttribute("class", "correct");
    p2.textContent = "the first console.log call had a value of 3";
} else {
    p2.setAttribute("class", "incorrect");
    p2.textContent = "the first console.log call did not have a value of 3";
}

/**
 * PROBLEM 3
 */
const p3 = document.querySelector("#p3");
if(typeof lst !== 'undefined' && lst instanceof Array) {
    if(lst.length === 3) {
        p3.setAttribute("class", "correct");
        p3.textContent = "lst is an array with three items";
    } else {
        p3.setAttribute("class", "incorrect");
        p3.textContent = `lst is an array with ${lst.length} items`;
    }
} else {
    p3.setAttribute("class", "incorrect");
    p3.textContent = typeof lst !== 'undefined' ? `lst type is ${lst}` : 'lst is undefined';
}

/**
 * PROBLEM 4
 */
const p4 = document.querySelector("#p4");
if(typeof obj === "object") {
    if(Object.keys(obj).length === 2) {
        p4.setAttribute("class", "correct");
        p4.textContent = "obj is an object with two key-value pairs";
    } else {
        p4.setAttribute("class", "incorrect");
        p4.textContent = `obj is an object with ${Object.keys(obj).length} key-value pairs`;
    }
} else {
    p4.setAttribute("class", "incorrect");
    p4.textContent = typeof obj !== 'undefined' ? `obj is ${obj}` : 'obj is not defined';
}

/**
 * PROBLEM 5
 */
 function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

 const p5 = document.querySelector("#p5");
 
 const log1to11 = console.logs.slice(1, 11).map((item) => item[0]);
 const oneToTen = Array.from(new Array(10), (x, i) => i + 1);
 if (arraysEqual(log1to11,  oneToTen)) {
    p5.setAttribute("class", "correct");
    p5.textContent = 'console log logged 1-10 in the expected place';
 } else {
    p5.setAttribute("class", "incorrect");
    p5.textContent = 'console log did not log 1-10 in the expected place';
 }

/**
 * PROBLEM 6
 */
const p6 = document.querySelector("#p6");

if (typeof alwaysBlue === 'function') {
    const blueCall = alwaysBlue();
    if(blueCall === "blue") {
        p6.setAttribute("class", "correct");
        p6.textContent = "alwaysBlue() returned 'blue'";
    } else {
        p6.setAttribute("class", "incorrect");
        p6.textContent = `alwaysBlue() returned ${blueCall}`;
    }
    
} else if (typeof alwaysBlue === 'undefined') {
    p6.setAttribute("class", "incorrect");
    p6.textContent = `alwaysBlue is not defined`;
}
else {
    p6.setAttribute("class", "incorrect");
    p6.textContent = `alwaysBlue is not a function`;
}

/**
 * PROBLEM 7
 */
document.querySelector('#on-click-check').addEventListener('click', (e) => {
    const p7 = document.querySelector("#p7");
    if (p7.classList.contains('correct')) {
        return;
    }
    setTimeout(() => {
        if (typeof eventOutput[0] !== 'undefined' && typeof eventOutput[0][0] !== 'undefined') {
            const eventOutput = console.logs.slice(-1);
            if (eventOutput[0][0] instanceof PointerEvent) {
                p7.setAttribute("class", "correct");
            }
        }
        
    });
});

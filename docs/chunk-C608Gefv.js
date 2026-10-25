import"./chunk-zSsmmLLa.js";import{En as mu,Et as Uv,Jn as tv,K as Mp,O as HI,Ot as VI,Pn as py,Q as OE,Rn as ru,Sn as kp,T as GI,V as Lc,Y as Np,cr as yy,f as Bp,gn as kI,kn as nu,lt as Qp,m as Bv,nt as PD,on as hi,or as yD,pr as zs,pt as Rc,rn as gu,rt as PI,ur as zI,x as FI,yt as Sp}from"./chunk-C5GIxfrr.js";import{i as ts,s as ce$1,t as $c}from"./main-63EQHPIM.js";import{l as pn,o as je,r as _n,t as Lt}from"./chunk-B0VuVsaS.js";var G=(t,c)=>c.id;var Z=(t,c)=>c.heading;function q(t,c){if(t&1){let e=GI();hi(0,`button`,36),kp(`click`,function(){nu(e);let a=zI();return ru(a.searchQuery.set(``))}),Sp(1,`i`,37),Rc()}}function K(t,c){if(t&1&&(hi(0,`span`,34),yD(1),Rc()),t&2){let e=zI().$implicit;Bp(`interview-badge`,e.badge.includes(`⭐`)),tv(),Lc(` `,e.badge,` `)}}function Q(t,c){if(t&1){let e=GI();hi(0,`button`,38),kp(`click`,function(){let a=nu(e).$implicit,l=zI();return ru(l.setActiveTopic(a.id))}),hi(1,`span`,39),yD(2),Rc(),hi(3,`span`,40),yD(4),Rc(),kI(5,K,2,3,`span`,41),Rc()}if(t&2){let e=c.$implicit,i=zI();Bp(`active`,i.activeTopicId()===e.id),Np(`aria-current`,i.activeTopicId()===e.id?`page`:null),tv(2),Qp(e.icon),tv(2),Qp(e.title),tv(),PI(e.badge?5:-1)}}function Y(t,c){if(t&1&&(hi(0,`div`,29)(1,`span`),yD(2,`🔍`),Rc(),hi(3,`p`),yD(4,`No topics match "`),hi(5,`strong`),yD(6),Rc(),yD(7,`"`),Rc()()),t&2){let e=zI();tv(6),Qp(e.searchQuery())}}function U(t,c){if(t&1&&(hi(0,`span`,34),yD(1),Rc()),t&2){let e=zI();Bp(`interview-badge`,e.badge.includes(`⭐`)),tv(),Lc(` `,e.badge,` `)}}function X(t,c){if(t&1&&Sp(0,`p`,61),t&2){let e=c.$implicit;Mp(`innerHTML`,e,py)}}function ee(t,c){if(t&1&&(hi(0,`th`),yD(1),Rc()),t&2){let e=c.$implicit;tv(),Qp(e)}}function te(t,c){if(t&1&&Sp(0,`td`,65),t&2){let e=c.$implicit;Mp(`innerHTML`,e,py)}}function ne(t,c){if(t&1&&(hi(0,`tr`),VI(1,te,1,1,`td`,65,FI),Rc()),t&2){let e=c.$implicit;tv(),HI(e)}}function oe(t,c){if(t&1&&(hi(0,`div`,62)(1,`table`,64)(2,`thead`)(3,`tr`),VI(4,ee,2,1,`th`,null,FI),Rc()(),hi(6,`tbody`),VI(7,ne,3,0,`tr`,null,FI),Rc()()()),t&2){let e=zI().$implicit;tv(4),HI(e.table.headers),tv(3),HI(e.table.rows)}}function ie(t,c){t&1&&(Sp(0,`i`,74),yD(1,` Copied! `))}function ae(t,c){t&1&&(Sp(0,`i`,75),yD(1,` Copy `))}function re(t,c){if(t&1){let e=GI();hi(0,`div`,63)(1,`div`,66)(2,`div`,67),Sp(3,`span`,68)(4,`span`,69)(5,`span`,70),Rc(),hi(6,`span`,71),yD(7),Rc(),hi(8,`button`,72),kp(`click`,function(){let a=nu(e),l=a.$implicit,g=a.$index,$=zI().$index,V=zI(),W=zI();return ru(W.copyCode(l.code,V.id+`-`+$+`-`+g))}),kI(9,ie,2,0)(10,ae,2,0),Rc()(),hi(11,`pre`,73)(12,`code`),yD(13),Rc()()()}if(t&2){let e=c.$implicit,i=c.$index,a=zI().$index,l=zI(),g=zI();tv(7),Qp(e.language),tv(),Np(`aria-label`,`Copy code`),tv(),PI(g.copiedCode()===l.id+`-`+a+`-`+i?9:10),tv(4),Qp(e.code)}}function se(t,c){if(t&1){let e=GI();hi(0,`div`,56)(1,`button`,57),kp(`click`,function(){let a=nu(e).$index,l=zI(),g=zI();return ru(g.toggleItem(l.id+`-`+a))}),hi(2,`span`,58),yD(3),Rc(),Sp(4,`i`,59),Rc(),hi(5,`div`,60),VI(6,X,1,1,`p`,61,FI),kI(8,oe,9,0,`div`,62),VI(9,re,14,4,`div`,63,FI),Rc()()}if(t&2){let e=c.$implicit,i=c.$index,a=zI(),l=zI();Bp(`expanded`,l.isExpanded(a.id+`-`+i)),tv(),Np(`aria-expanded`,l.isExpanded(a.id+`-`+i)),tv(2),Qp(e.heading),tv(),Bp(`bx-chevron-down`,!l.isExpanded(a.id+`-`+i))(`bx-chevron-up`,l.isExpanded(a.id+`-`+i)),tv(),Bp(`open`,l.isExpanded(a.id+`-`+i)),tv(),HI(e.content),tv(2),PI(e.table?8:-1),tv(),HI(e.codeBlocks)}}function ce(t,c){if(t&1){let e=GI();hi(0,`button`,76),kp(`click`,function(){nu(e);let a=zI(),l=zI();return ru(l.setActiveTopic(l.filteredTopics()[l.filteredTopics().indexOf(a)-1].id))}),Sp(1,`i`,77),hi(2,`span`),yD(3),Rc()()}if(t&2){let e=zI(),i=zI();tv(3),Qp(i.filteredTopics()[i.filteredTopics().indexOf(e)-1].title)}}function le(t,c){t&1&&Sp(0,`div`)}function de(t,c){if(t&1){let e=GI();hi(0,`button`,78),kp(`click`,function(){nu(e);let a=zI(),l=zI();return ru(l.setActiveTopic(l.filteredTopics()[l.filteredTopics().indexOf(a)+1].id))}),hi(1,`span`),yD(2),Rc(),Sp(3,`i`,79),Rc()}if(t&2){let e=zI(),i=zI();tv(2),Qp(i.filteredTopics()[i.filteredTopics().indexOf(e)+1].title)}}function pe(t,c){if(t&1){let e=GI();hi(0,`div`,42)(1,`span`,43),yD(2),Rc(),hi(3,`div`,44)(4,`h2`,45),yD(5),Rc(),kI(6,U,2,3,`span`,41),Rc(),hi(7,`div`,46)(8,`button`,47),kp(`click`,function(){nu(e);let a=zI();return ru(a.expandAllForTopic())}),Sp(9,`i`,48),yD(10,` Expand All `),Rc(),hi(11,`button`,49),kp(`click`,function(){nu(e);let a=zI();return ru(a.collapseAllForTopic())}),Sp(12,`i`,50),yD(13,` Collapse `),Rc()()(),hi(14,`div`,51),VI(15,se,11,11,`div`,52,Z),Rc(),hi(17,`div`,53),kI(18,ce,4,1,`button`,54)(19,le,1,0,`div`),kI(20,de,4,1,`button`,55),Rc()}if(t&2){let e=c,i=zI();tv(2),Qp(e.icon),tv(3),Qp(e.title),tv(),PI(e.badge?6:-1),tv(9),HI(e.items),tv(3),PI(i.filteredTopics().indexOf(e)>0?18:19),tv(2),PI(i.filteredTopics().indexOf(e)<i.filteredTopics().length-1?20:-1)}}var Ce=(()=>{class t{constructor(){this.searchQuery=zs(``),this.activeTopicId=zs(`sync-async`),this.expandedItems=zs(new Set),this.copiedCode=zs(null),this.topics=[{id:`sync-async`,icon:`⚡`,title:`Synchronous vs Asynchronous`,badge:`Core`,items:[{heading:`Overview`,content:[`JavaScript is a <strong>synchronous, single-threaded language</strong> — code executes line by line, one task at a time.`,`<strong>Synchronous</strong>: Tasks execute one after another — JavaScript waits for each operation to complete before moving on.`,`<strong>Asynchronous</strong>: JavaScript can start a task and continue executing without waiting for it to finish. Results are handled via callbacks, Promises, or <code>async/await</code>.`]},{heading:`Real-world Example`,content:[`API calls, timers (<code>setTimeout</code>), and file operations are asynchronous — they run in the background so the rest of the app stays responsive.`],codeBlocks:[{language:`js`,code:`// Synchronous \u2014 blocks until done
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous \u2014 non-blocking
console.log("Start");
setTimeout(() => console.log("Async Task Done"), 1000);
console.log("End"); // logs before "Async Task Done"`}]}]},{id:`execution-context`,icon:`🧠`,title:`Execution Context`,badge:`Core`,items:[{heading:`What is Execution Context?`,content:[`Every time JavaScript runs code, it does so inside an <strong>Execution Context</strong> — a container with two phases:`,`<strong>1. Memory Phase (Creation)</strong>: Variables are hoisted and assigned <code>undefined</code>; functions are stored entirely.`,`<strong>2. Code Phase (Execution)</strong>: Code runs line by line, values are assigned.`]},{heading:`Two Components`,content:[`<strong>Memory Component (Variable Environment)</strong> — stores variables and functions as key-value pairs.`,`<strong>Code Component (Thread of Execution)</strong> — executes code line by line.`],codeBlocks:[{language:`js`,code:`var x = 10;

function greet(name) {
  var msg = "Hello, " + name;
  return msg;
}

var result = greet("Arjun");
console.log(result); // "Hello, Arjun"`}]}]},{id:`call-stack`,icon:`📚`,title:`Call Stack`,badge:`Core`,items:[{heading:`How it works`,content:[`The <strong>Call Stack</strong> is a LIFO (Last In, First Out) data structure that tracks which function is currently being executed.`,`When a function is called, it is pushed onto the stack. When it returns, it is popped off.`,`The Global Execution Context is always at the bottom. When the stack is empty, JavaScript is idle.`],codeBlocks:[{language:`js`,code:`function third()  { console.log("Third");  }
function second() { third(); console.log("Second"); }
function first()  { second(); console.log("First"); }

first();
// Stack: [Global] \u2192 [first] \u2192 [second] \u2192 [third]
// Output: Third \u2192 Second \u2192 First`}]}]},{id:`hoisting`,icon:`🚀`,title:`Hoisting`,badge:`Tricky`,items:[{heading:`What is Hoisting?`,content:[`<strong>Hoisting</strong> allows variables and functions to be accessed before they are declared in code.`,`<code>var</code> declarations are hoisted and initialized with <code>undefined</code>.`,`Function <em>declarations</em> are fully hoisted — they can be called before their definition.`,`<code>let</code> and <code>const</code> are hoisted but remain in the <strong>Temporal Dead Zone (TDZ)</strong> — accessing them before declaration throws a <code>ReferenceError</code>.`],codeBlocks:[{language:`js`,code:`console.log(x); // undefined (var is hoisted)
var x = 5;

greet(); // \u2705 Works \u2014 function declaration is fully hoisted
function greet() {
  console.log("Hello!");
}

console.log(y); // \u274C ReferenceError: Cannot access 'y' before initialization
let y = 10;`}]}]},{id:`let-const-tdz`,icon:`🔒`,title:`let, const & the TDZ`,badge:`Interview ⭐`,items:[{heading:`Temporal Dead Zone (TDZ)`,content:[`The <strong>TDZ</strong> is the time window between entering a scope and the moment a <code>let</code>/<code>const</code> variable is initialized.`,`Accessing a variable in its TDZ throws a <code>ReferenceError: Cannot access 'x' before initialization</code>.`],codeBlocks:[{language:`js`,code:`{
  // TDZ for 'name' starts here
  // console.log(name); // \u274C ReferenceError

  let name = "Arjun"; // TDZ ends here
  console.log(name);  // \u2705 "Arjun"
}`}]},{heading:`Are let & const Hoisted? (YES!)`,content:[`A common myth: only <code>var</code> is hoisted. But <strong>let and const ARE hoisted too</strong>!`,`<code>var</code> → Hoisted into <strong>Global/Function</strong> memory, initialized as <code>undefined</code>.`,`<code>let</code>/<code>const</code> → Hoisted into a separate <strong>Script scope</strong>, remain <em>uninitialized</em> in TDZ.`],codeBlocks:[{language:`js`,code:`let x = "Global";
{
  // If x was NOT hoisted, it would log "Global"
  // Instead it throws ReferenceError \u2192 PROOF it was hoisted!
  console.log(x); // \u274C ReferenceError
  let x = "Local";
}`}]},{heading:`var vs let vs const`,content:[],table:{headers:[`Feature`,`var`,`let`,`const`],rows:[[`Scope`,`Function/Global`,`Block {}`,`Block {}`],[`Hoisted?`,`Yes (undefined)`,`Yes (TDZ)`,`Yes (TDZ)`],[`Re-declaration`,`Allowed`,`❌ SyntaxError`,`❌ SyntaxError`],[`Re-assignment`,`Allowed`,`Allowed`,`❌ TypeError`],[`Attaches to window`,`Yes`,`No`,`No`]]}},{heading:`const with Objects (Mutation vs Reassignment)`,content:[`<code>const</code> prevents <em>reassigning</em> the binding — it does NOT freeze the object properties.`],codeBlocks:[{language:`js`,code:`const person = { name: "Arjun", age: 25 };

// \u2705 Mutating properties \u2014 ALLOWED
person.age = 26;
person.city = "Pune";

// \u274C Reassigning the reference \u2014 TypeError
// person = { name: "Rahul" };

// To truly freeze an object:
Object.freeze(person); // Now no properties can be modified`}]}]},{id:`undefined-null`,icon:`❓`,title:`undefined vs null vs not defined`,badge:`Interview ⭐`,items:[{heading:`The Three Concepts`,content:[`<strong>undefined</strong>: A primitive value automatically assigned by JavaScript to a declared but uninitialized variable.`,`<strong>null</strong>: An intentional representation of "no value" — explicitly set by the developer.`,`<strong>not defined</strong>: A <code>ReferenceError</code> — the variable was never declared anywhere in scope.`],codeBlocks:[{language:`js`,code:`var a;
console.log(a);         // undefined (declared, not initialized)
console.log(typeof a);  // "undefined"

let user = null;
console.log(user);        // null
console.log(typeof user); // "object" (historical JS bug!)

console.log(y); // \u274C ReferenceError: y is not defined`}]},{heading:`Equality & Arithmetic`,content:[],codeBlocks:[{language:`js`,code:`// Loose equality (coercion)
console.log(null == undefined);  // true
// Strict equality
console.log(null === undefined); // false

// Arithmetic
console.log(null + 1);      // 1   (null \u2192 0)
console.log(undefined + 1); // NaN (undefined \u2192 NaN)`}]}]},{id:`scope-closure`,icon:`🔗`,title:`Scope, Lexical Env & Scope Chain`,badge:`Core`,items:[{heading:`Types of Scope`,content:[`<strong>Global Scope</strong>: Variables accessible from anywhere in the file.`,`<strong>Function (Local) Scope</strong>: Variables declared inside a function — only accessible within it.`,`<strong>Block Scope (ES6)</strong>: <code>let</code>/<code>const</code> inside <code>{}</code> are confined to that block.`]},{heading:`Lexical Environment & Scope Chain`,content:[`<strong>Lexical Environment</strong> = Local Memory + Reference to Parent Lexical Environment.`,`The <strong>Scope Chain</strong> is the lookup mechanism: JavaScript first checks local memory, then parent, then grandparent… up to global.`,`If the variable is not found anywhere → <code>ReferenceError</code>.`],codeBlocks:[{language:`js`,code:`function a() {
  var b = 10;
  function c() {
    console.log(b); // 10 \u2014 found via scope chain in a()
  }
  c();
}
a();
// console.log(b); // \u274C ReferenceError \u2014 b is local to a()`}]}]},{id:`variable-shadowing`,icon:`🌑`,title:`Variable Shadowing & Illegal Shadowing`,badge:`Tricky`,items:[{heading:`Variable Shadowing`,content:[`When an inner scope variable has the <strong>same name</strong> as an outer scope variable, it <em>shadows</em> (hides) the outer one within that scope.`],codeBlocks:[{language:`js`,code:`var a = 100;
let b = 200;

{
  var a = 10;  // Shadows & OVERWRITES global a (var is not block-scoped!)
  let b = 20;  // Shadows outer b \u2014 only inside this block
  console.log(a); // 10
  console.log(b); // 20
}

console.log(a); // 10 (var leaked out!)
console.log(b); // 200 (let was NOT affected)`}]},{heading:`Illegal Shadowing`,content:[`You <strong>cannot</strong> shadow a <code>let</code>/<code>const</code> with <code>var</code> in the same or nested block. This causes a <code>SyntaxError</code>.`,`Exception: Shadowing <code>let</code> with <code>var</code> <em>inside a function</em> is legal — the function boundary contains the <code>var</code>.`],codeBlocks:[{language:`js`,code:`// \u274C ILLEGAL \u2014 SyntaxError
let a = 20;
{
  var a = 20; // var tries to escape block and collides with let a
}

// \u2705 LEGAL \u2014 var is contained within function scope
let x = 20;
function test() {
  var x = 50; // OK! Function boundary prevents escape
  console.log(x); // 50
}
test();
console.log(x); // 20 \u2014 unchanged`}]}]},{id:`closures`,icon:`📦`,title:`Closures`,badge:`Interview ⭐`,items:[{heading:`Definition`,content:[`A <strong>closure</strong> is a function bundled with its <em>lexical environment</em>.`,`Even after an outer function has finished executing, the inner function still has access to the outer function's variables — it retains a reference to them.`],codeBlocks:[{language:`js`,code:`function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer(); // outer() is done, but inner() retains 'count'
counter(); // 1
counter(); // 2
counter(); // 3`}]},{heading:`Classic Use Cases`,content:[`Data encapsulation / private variables`,`Function factories / partial application`,`Memoization`,`Event handlers retaining state`]}]},{id:`functions`,icon:`🛠️`,title:`Functions: Types & Concepts`,badge:`Core`,items:[{heading:`Function Statement vs Expression`,content:[],table:{headers:[``,`Function Statement`,`Function Expression`],rows:[[`Definition`,`Named function with keyword`,`Function assigned to variable`],[`Hoisting`,`Fully hoisted ✅`,`Only variable is hoisted (undefined) ❌`],[`Call before definition?`,`Yes ✅`,`No ❌ — TypeError`]]},codeBlocks:[{language:`js`,code:`// Function Statement (Declaration)
function add(a, b) { return a + b; }

// Function Expression
const multiply = function(a, b) { return a * b; };

// Anonymous Function
const greet = function() { console.log("Hi!"); };

// Named Function Expression
const sayHello = function hello() {
  console.log("Hello!");
};
sayHello(); // \u2705
// hello(); // \u274C ReferenceError \u2014 name not in outer scope`}]},{heading:`First-Class & Higher Order Functions`,content:[`<strong>First-Class Functions</strong>: Functions are treated like values — they can be assigned to variables, passed as arguments, or returned from other functions.`,`<strong>Higher Order Functions (HOF)</strong>: Functions that take another function as an argument (callback) and/or return a function.`],codeBlocks:[{language:`js`,code:`// HOF Example 1: taking a callback
function higherOrder(callback) {
  callback();
}
higherOrder(() => console.log("I am a callback!"));

// HOF Example 2: polyfill for map
const radius = [3, 4, 5];
const area = (r) => Math.PI * r * r;

Array.prototype.calculate = function(logic) {
  return this.map(logic);
};

console.log(radius.calculate(area));
console.log(radius.map(area)); // same result`}]},{heading:`Parameters vs Arguments`,content:[`<strong>Parameters</strong>: Identifiers listed in the function <em>definition</em>.`,`<strong>Arguments</strong>: Actual values passed when calling the function.`],codeBlocks:[{language:`js`,code:`function add(a, b) { // a, b are PARAMETERS
  return a + b;
}
add(2, 3); // 2, 3 are ARGUMENTS`}]}]},{id:`call-apply-bind`,icon:`🎯`,title:`call(), apply() and bind()`,badge:`Interview ⭐`,items:[{heading:`Purpose`,content:[`<code>call</code>, <code>apply</code>, and <code>bind</code> let you <strong>explicitly set the <code>this</code> context</strong> of a function.`],table:{headers:[`Method`,`Invocation`,`Arguments`,`Returns`],rows:[[`call()`,`Immediate`,`Comma-separated`,`Function result`],[`apply()`,`Immediate`,`Single array`,`Function result`],[`bind()`,`Deferred`,`Comma-separated`,`New bound function`]]}},{heading:`Examples`,content:[],codeBlocks:[{language:`js`,code:`const person1 = { firstName: "Arjun", lastName: "Khade" };
const person2 = { firstName: "Rahul", lastName: "Sharma" };

function printName(city, state) {
  console.log(\`\${this.firstName} \${this.lastName} from \${city}, \${state}\`);
}

// call \u2014 args comma-separated
printName.call(person1, "Pune", "Maharashtra");

// apply \u2014 args as array
printName.apply(person2, ["Mumbai", "Maharashtra"]);

// bind \u2014 returns a NEW function (doesn't execute yet)
const printArjun = printName.bind(person1, "Pune");
printArjun("Maharashtra"); // call it later`}]},{heading:`bind() Polyfill (Interview Classic)`,content:[`Write a custom <code>myBind</code> from scratch:`],codeBlocks:[{language:`js`,code:`Function.prototype.myBind = function(context, ...args) {
  const originalFunc = this;
  return function(...newArgs) {
    return originalFunc.apply(context, [...args, ...newArgs]);
  };
};

const boundFn = printName.myBind(person1, "Pune");
boundFn("Maharashtra"); // "Arjun Khade from Pune, Maharashtra"`}]}]},{id:`event-loop`,icon:`🔄`,title:`Event Loop, Microtask & Macrotask`,badge:`Interview ⭐`,items:[{heading:`Architecture`,content:[`<strong>Call Stack</strong>: Executes JS code (LIFO).`,`<strong>Web APIs</strong>: Handles background work (timers, fetch, DOM events).`,`<strong>Microtask Queue (HIGH priority)</strong>: Promises, <code>async/await</code>, <code>queueMicrotask()</code>.`,`<strong>Macrotask Queue (lower priority)</strong>: <code>setTimeout</code>, <code>setInterval</code>, DOM events, I/O.`,`<strong>Event Loop</strong>: When the Call Stack is empty, drains ALL microtasks first, then runs ONE macrotask.`]},{heading:`Priority Rule`,content:[`🏆 <strong>Sync Code</strong> → <strong>All Microtasks</strong> → <strong>One Macrotask</strong> (repeat)`],codeBlocks:[{language:`js`,code:`console.log("1. Sync Start");

setTimeout(() => console.log("2. Macrotask: setTimeout"), 0);

Promise.resolve()
  .then(() => console.log("3. Microtask: Promise 1"))
  .then(() => console.log("4. Microtask: Promise 2"));

queueMicrotask(() => console.log("5. Microtask: queueMicrotask"));

console.log("6. Sync End");

// Output:
// 1. Sync Start
// 6. Sync End
// 3. Microtask: Promise 1
// 5. Microtask: queueMicrotask
// 4. Microtask: Promise 2
// 2. Macrotask: setTimeout`}]}]},{id:`shallow-deep-copy`,icon:`📋`,title:`Shallow Copy vs Deep Copy`,badge:`Tricky`,items:[{heading:`Shallow Copy`,content:[`A <strong>shallow copy</strong> creates a new object, but <em>nested objects/arrays are still shared references</em>.`,`Changing a nested property in the copy also affects the original.`],codeBlocks:[{language:`js`,code:`const person = { name: "Arjun", address: { city: "Pune" } };
const copy = { ...person }; // Shallow copy

copy.name = "Rahul";        // \u2705 Independent (primitive)
copy.address.city = "Mumbai"; // \u274C Affects original! (shared reference)

console.log(person.address.city); // "Mumbai" \u2014 mutated!

// Other shallow copy methods:
const copy2 = Object.assign({}, person);
const arrCopy = [...arr];`}]},{heading:`Deep Copy`,content:[`A <strong>deep copy</strong> creates a completely independent copy — including all nested structures.`],codeBlocks:[{language:`js`,code:`const person = { name: "Arjun", address: { city: "Pune" } };

// \u2705 Modern (recommended) \u2014 preserves Date, Set, Map, etc.
const deepCopy = structuredClone(person);
deepCopy.address.city = "Mumbai";
console.log(person.address.city); // "Pune" \u2014 unchanged!

// Older approach \u2014 has limitations (loses functions, Date, undefined)
const oldCopy = JSON.parse(JSON.stringify(person));`}]}]},{id:`es6`,icon:`✨`,title:`ES6+ Features`,badge:`Must Know`,items:[{heading:`Arrow Functions`,content:[`Shorter syntax + <strong>lexically binds <code>this</code></strong> (inherits from enclosing scope).`,`Cannot be used as constructors. No own <code>arguments</code>, <code>super</code>, or <code>new.target</code>.`],codeBlocks:[{language:`js`,code:`const add = (a, b) => a + b;
const square = x => x * x;

// Lexical this
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // 'this' refers to Timer instance \u2705
  }, 1000);
}`}]},{heading:`Destructuring, Spread & Rest`,content:[],codeBlocks:[{language:`js`,code:`// Object Destructuring with rename & defaults
const { firstName: name, role, salary = 50000 } = developer;

// Array Destructuring & skip
const [red, , blue] = [255, 140, 0];

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];

// Spread \u2014 expands
const merged = [...arr1, ...arr2];
const updated = { ...defaults, fontSize: 16 };

// Rest \u2014 collects
function sum(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}`}]},{heading:`Promises, async/await & Combinators`,content:[],codeBlocks:[{language:`js`,code:`// async/await
async function getUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// Promise Combinators
// Promise.all \u2014 fails fast on first rejection
// Promise.allSettled \u2014 waits for all, never rejects
// Promise.any \u2014 first resolution wins
// Promise.race \u2014 first settlement wins`}]},{heading:`Modern Features (ES2020–ES2023)`,content:[],codeBlocks:[{language:`js`,code:`// Optional Chaining (?.) \u2014 ES2020
user?.profile?.address?.city; // undefined, not TypeError

// Nullish Coalescing (??) \u2014 ES2020
// Returns fallback ONLY for null/undefined (unlike || which covers all falsy)
const speed = config.speed ?? 300; // 0 is preserved!

// Logical Assignment \u2014 ES2021
b ??= "Default"; // assign only if null/undefined
count ||= 1;      // assign only if falsy
token &&= \`Bearer \${token}\`; // assign only if truthy

// structuredClone \u2014 built-in deep copy
const copy = structuredClone(original);

// Immutable Array methods \u2014 ES2023
const sorted = nums.toSorted();     // doesn't mutate
const reversed = nums.toReversed(); // doesn't mutate
const updated = nums.with(0, 99);   // replaces index 0`}]}]}],this.filteredTopics=PD(()=>{let e=this.searchQuery().toLowerCase().trim();return e?this.topics.filter(i=>i.title.toLowerCase().includes(e)||i.items.some(a=>a.heading.toLowerCase().includes(e)||a.content.some(l=>l.toLowerCase().includes(e)))):this.topics}),this.activeTopic=PD(()=>this.filteredTopics().find(e=>e.id===this.activeTopicId())??this.filteredTopics()[0]),this.expandAllForCurrentTopic(this.activeTopicId())}expandAllForCurrentTopic(e){let i=this.topics.find(a=>a.id===e);if(i&&i.items.length>0){let a=new Set;i.items.forEach((l,g)=>a.add(`${e}-${g}`)),this.expandedItems.set(a)}}setActiveTopic(e){this.activeTopicId.set(e),this.expandAllForCurrentTopic(e),window.scrollTo({top:0,behavior:`smooth`})}expandAllForTopic(){this.expandAllForCurrentTopic(this.activeTopicId())}collapseAllForTopic(){this.expandedItems.set(new Set)}toggleItem(e){let i=new Set(this.expandedItems());i.has(e)?i.delete(e):i.add(e),this.expandedItems.set(i)}isExpanded(e){return this.expandedItems().has(e)}async copyCode(e,i){try{await navigator.clipboard.writeText(e),this.copiedCode.set(i),setTimeout(()=>this.copiedCode.set(null),2e3)}catch{}}onKey(e){(e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),document.getElementById(`js-search`)?.focus())}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=OE({type:t,selectors:[[`app-javascript-fundamentals`]],hostBindings:function(i,a){i&1&&kp(`keydown`,function(g){return a.onKey(g)},yy)},decls:65,vars:5,consts:[[1,`js-page`],[1,`js-hero`],[1,`js-hero-inner`],[`aria-label`,`Breadcrumb`,1,`js-breadcrumb`],[`routerLink`,`/upskill`,1,`breadcrumb-back-btn`],[1,`bx`,`bx-left-arrow-alt`],[1,`breadcrumb-separator`],[1,`breadcrumb-current`],[1,`js-hero-badge`],[`viewBox`,`0 0 32 32`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`,`aria-label`,`JavaScript logo`,1,`js-badge-svg`],[`width`,`32`,`height`,`32`,`rx`,`4`,`fill`,`#F7DF1E`],[`d`,`M19.5 24.5c.9.5 1.9.9 3 .9 1.4 0 2.2-.7 2.2-1.7 0-1.1-.9-1.6-2.5-2.3l-.8-.4c-2.3-1-3.8-2.3-3.8-4.9 0-2.4 1.9-4.2 4.9-4.2 1.4 0 2.6.4 3.4.9l-.9 2.1c-.6-.4-1.5-.7-2.5-.7-1.3 0-2 .6-2 1.5 0 .9.8 1.4 2.2 2l.8.4c2.6 1.1 4.1 2.4 4.1 5.2 0 2.7-2.1 4.4-5.3 4.4-1.7 0-3.1-.5-4.2-1.1l.5-2.1zm-8.8.4c.7.4 1.5.6 2.3.6 1.3 0 2.1-.6 2.1-2.3v-11.1h2.8v11.2c0 3.2-1.8 4.7-4.8 4.7-1.4 0-2.6-.4-3.3-.9l.9-2.2z`,`fill`,`#000000`],[1,`js-hero-title`],[1,`gradient-text`],[1,`gradient-text-cyan`],[1,`js-hero-subtitle`],[1,`js-stats`],[1,`js-stat`],[1,`js-stat-num`],[1,`js-stat-label`],[1,`js-stat-divider`],[1,`js-layout`],[1,`js-sidebar`],[1,`js-search-wrap`],[1,`bx`,`bx-search`,`js-search-icon`],[`id`,`js-search`,`type`,`text`,`placeholder`,`Search topics... (Ctrl+K)`,`autocomplete`,`off`,1,`js-search-input`,3,`ngModelChange`,`ngModel`],[`aria-label`,`Clear search`,1,`js-search-clear`],[`aria-label`,`JavaScript topics navigation`,1,`js-topic-list`],[1,`js-topic-btn`,3,`active`],[1,`js-no-results`],[1,`js-legend`],[1,`js-legend-title`],[1,`js-legend-item`],[1,`js-topic-badge`,`interview-badge`],[1,`js-topic-badge`],[`id`,`js-main-content`,1,`js-content`],[`aria-label`,`Clear search`,1,`js-search-clear`,3,`click`],[1,`bx`,`bx-x`],[1,`js-topic-btn`,3,`click`],[1,`js-topic-icon`],[1,`js-topic-title-text`],[1,`js-topic-badge`,3,`interview-badge`],[1,`js-content-header`],[1,`js-content-icon`],[1,`js-content-header-text`],[1,`js-content-title`],[1,`js-content-actions`],[`title`,`Expand all sections`,1,`js-action-btn`,3,`click`],[1,`bx`,`bx-expand-vertical`],[`title`,`Collapse all sections`,1,`js-action-btn`,3,`click`],[1,`bx`,`bx-collapse-vertical`],[1,`js-accordion`],[1,`js-accordion-item`,3,`expanded`],[1,`js-topic-nav`],[1,`js-nav-btn`,`prev`],[1,`js-nav-btn`,`next`],[1,`js-accordion-item`],[1,`js-accordion-header`,3,`click`],[1,`js-accordion-heading`],[1,`bx`,`js-accordion-chevron`],[1,`js-accordion-body`],[1,`js-content-line`,3,`innerHTML`],[1,`js-table-wrap`],[1,`js-code-block`],[1,`js-table`],[3,`innerHTML`],[1,`js-code-header`],[1,`js-code-dots`],[1,`dot`,`red`],[1,`dot`,`yellow`],[1,`dot`,`green`],[1,`js-code-lang`],[1,`js-copy-btn`,3,`click`],[1,`js-pre`],[1,`bx`,`bx-check`],[1,`bx`,`bx-copy`],[1,`js-nav-btn`,`prev`,3,`click`],[1,`bx`,`bx-chevron-left`],[1,`js-nav-btn`,`next`,3,`click`],[1,`bx`,`bx-chevron-right`]],template:function(i,a){if(i&1&&(hi(0,`div`,0)(1,`header`,1)(2,`div`,2)(3,`nav`,3)(4,`a`,4),Sp(5,`i`,5),yD(6,` Back to Upskill Hub `),Rc(),hi(7,`span`,6),yD(8,`/`),Rc(),hi(9,`span`,7),yD(10,`JavaScript Fundamentals`),Rc()(),hi(11,`div`,8),gu(),hi(12,`svg`,9),Sp(13,`rect`,10)(14,`path`,11),Rc(),mu(),hi(15,`span`),yD(16,`JavaScript Fundamentals`),Rc()(),hi(17,`h1`,12)(18,`span`,13),yD(19,`JavaScript`),Rc(),hi(20,`span`,14),yD(21,` Fundamentals`),Rc()(),hi(22,`p`,15),yD(23,` Master core execution concepts: synchronous vs asynchronous, execution context, hoisting, closures, and modern ES6+ patterns. `),Rc(),hi(24,`div`,16)(25,`div`,17)(26,`span`,18),yD(27),Rc(),hi(28,`span`,19),yD(29,`Topics`),Rc()(),Sp(30,`div`,20),hi(31,`div`,17)(32,`span`,18),yD(33,`20+`),Rc(),hi(34,`span`,19),yD(35,`Code Examples`),Rc()(),Sp(36,`div`,20),hi(37,`div`,17)(38,`span`,18),yD(39,`6`),Rc(),hi(40,`span`,19),yD(41,`Interview Topics`),Rc()()()()(),hi(42,`div`,21)(43,`aside`,22)(44,`div`,23),Sp(45,`i`,24),hi(46,`input`,25),Bv(),kp(`ngModelChange`,function(g){return a.searchQuery.set(g)}),Rc(),kI(47,q,2,0,`button`,26),Rc(),hi(48,`nav`,27),VI(49,Q,6,6,`button`,28,G),kI(51,Y,8,1,`div`,29),Rc(),hi(52,`div`,30)(53,`p`,31),yD(54,`Legend`),Rc(),hi(55,`div`,32)(56,`span`,33),yD(57,`⭐`),Rc(),yD(58,` Frequently asked in interviews`),Rc(),hi(59,`div`,32)(60,`span`,34),yD(61,`Tricky`),Rc(),yD(62,` Common misconceptions`),Rc()()(),hi(63,`main`,35),kI(64,pe,21,5),Rc()()()),i&2){let l;tv(27),Qp(a.topics.length),tv(19),Mp(`ngModel`,a.searchQuery()),Uv(),tv(),PI(a.searchQuery()?47:-1),tv(2),HI(a.filteredTopics()),tv(2),PI(a.filteredTopics().length===0?51:-1),tv(13),PI((l=a.activeTopic())?64:-1,l)}},dependencies:[ce$1,_n,je,pn,Lt,$c,ts],styles:[`.js-page[_ngcontent-%COMP%]{min-height:100vh;color:var(--%NS%text-main);padding-top:80px}.js-hero[_ngcontent-%COMP%]{padding:3.5rem 0 2.5rem;text-align:center;position:relative;background:linear-gradient(180deg,rgba(0,245,160,.04) 0%,transparent 100%);border-bottom:1px solid var(--%NS%border-glass)}.js-hero-inner[_ngcontent-%COMP%]{max-width:780px;margin:0 auto;padding:0 1.5rem}.js-breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.6rem;margin-bottom:1.5rem;font-size:.85rem}.breadcrumb-back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;color:var(--%NS%text-muted);text-decoration:none;font-weight:500;padding:.3rem .75rem;background:#ffffff0a;border:1px solid rgba(255,255,255,.08);border-radius:var(--%NS%radius-full);transition:all .2s ease}.breadcrumb-back-btn[_ngcontent-%COMP%]:hover{color:var(--%NS%primary);border-color:#00f5a04d;background:#00f5a014;transform:translate(-2px)}.breadcrumb-separator[_ngcontent-%COMP%]{color:var(--%NS%text-dim)}.breadcrumb-current[_ngcontent-%COMP%]{color:var(--%NS%text-main);font-weight:600}.js-hero-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem 1rem;font-size:.8rem;font-family:var(--%NS%font-mono);color:#f7df1e;background:#f7df1e14;border:1px solid rgba(247,223,30,.25);border-radius:var(--%NS%radius-full);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:1.25rem}.js-badge-dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#f7df1e;box-shadow:0 0 8px #f7df1e;animation:pulse-glow 2s infinite}.js-badge-svg[_ngcontent-%COMP%]{width:18px;height:18px;display:inline-block;border-radius:3px;flex-shrink:0}.js-hero-title[_ngcontent-%COMP%]{font-size:clamp(2rem,5vw,3rem);font-weight:800;letter-spacing:-.03em;margin-bottom:1rem;line-height:1.15}.js-hero-subtitle[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:1.05rem;max-width:600px;margin:0 auto 2rem;line-height:1.65}.js-stats[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:1.5rem;padding:.85rem 2rem;background:var(--%NS%bg-card);border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-full);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.js-stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.15rem}.js-stat-num[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:var(--%NS%primary);font-family:var(--%NS%font-mono);line-height:1}.js-stat-label[_ngcontent-%COMP%]{font-size:.72rem;color:var(--%NS%text-dim);text-transform:uppercase;letter-spacing:.5px}.js-stat-divider[_ngcontent-%COMP%]{width:1px;height:30px;background:var(--%NS%border-glass)}.js-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:300px 1fr;gap:0;max-width:1400px;margin:0 auto;min-height:calc(100vh - 80px)}.js-sidebar[_ngcontent-%COMP%]{border-right:1px solid var(--%NS%border-glass);padding:1.5rem 1rem;position:sticky;top:80px;height:calc(100vh - 80px);overflow-y:auto;overflow-x:hidden;background:#0a0e18b3;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);scrollbar-width:thin;scrollbar-color:rgba(0,245,160,.2) transparent}.js-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}.js-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#00f5a033;border-radius:10px}.js-search-wrap[_ngcontent-%COMP%]{position:relative;margin-bottom:1.25rem}.js-search-icon[_ngcontent-%COMP%]{position:absolute;left:.85rem;top:50%;transform:translateY(-50%);font-size:1rem;color:var(--%NS%text-dim);pointer-events:none}.js-search-input[_ngcontent-%COMP%]{width:100%;background:#ffffff0a;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);padding:.6rem 2.5rem .6rem 2.25rem;font-size:.85rem;color:var(--%NS%text-main);font-family:var(--%NS%font-sans);transition:all .25s ease;outline:none}.js-search-input[_ngcontent-%COMP%]::placeholder{color:var(--%NS%text-dim)}.js-search-input[_ngcontent-%COMP%]:focus{border-color:#00f5a066;background:#00f5a00a;box-shadow:0 0 0 3px #00f5a014}.js-search-clear[_ngcontent-%COMP%]{position:absolute;right:.6rem;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--%NS%text-dim);cursor:pointer;padding:.2rem;border-radius:4px;display:flex;align-items:center;transition:color .2s;font-size:1.1rem}.js-search-clear[_ngcontent-%COMP%]:hover{color:var(--%NS%text-main)}.js-topic-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.js-topic-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;width:100%;padding:.7rem .85rem;background:transparent;border:1px solid transparent;border-radius:var(--%NS%radius-md);color:var(--%NS%text-muted);font-size:.86rem;font-family:var(--%NS%font-sans);font-weight:500;cursor:pointer;text-align:left;transition:all .2s ease;flex-wrap:nowrap}.js-topic-btn[_ngcontent-%COMP%]:hover{background:#ffffff0a;color:var(--%NS%text-main);border-color:var(--%NS%border-glass)}.js-topic-btn.active[_ngcontent-%COMP%]{background:#00f5a01a;border-color:#00f5a04d;color:var(--%NS%primary)}.js-topic-icon[_ngcontent-%COMP%]{font-size:1.05rem;flex-shrink:0}.js-topic-title-text[_ngcontent-%COMP%]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.js-topic-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.18rem .5rem;font-size:.68rem;font-family:var(--%NS%font-mono);border-radius:var(--%NS%radius-full);background:#ffffff0f;color:var(--%NS%text-dim);border:1px solid rgba(255,255,255,.1);white-space:nowrap;flex-shrink:0;font-weight:500}.js-topic-badge.interview-badge[_ngcontent-%COMP%]{background:#a855f71f;color:#c084fc;border-color:#a855f74d}.js-no-results[_ngcontent-%COMP%]{text-align:center;padding:2rem 1rem;color:var(--%NS%text-dim)}.js-no-results[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem;display:block;margin-bottom:.5rem}.js-no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem}.js-legend[_ngcontent-%COMP%]{margin-top:2rem;padding:1rem;background:#ffffff05;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md)}.js-legend-title[_ngcontent-%COMP%]{font-size:.72rem;text-transform:uppercase;letter-spacing:1px;color:var(--%NS%text-dim);margin-bottom:.75rem;font-weight:600}.js-legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.8rem;color:var(--%NS%text-muted);margin-bottom:.4rem}.js-content[_ngcontent-%COMP%]{padding:2rem 2.5rem 4rem;max-width:900px}.js-content-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:1px solid var(--%NS%border-glass);flex-wrap:wrap}.js-content-icon[_ngcontent-%COMP%]{font-size:2.25rem;flex-shrink:0}.js-content-header-text[_ngcontent-%COMP%]{flex:1;min-width:200px}.js-content-title[_ngcontent-%COMP%]{font-size:1.65rem;font-weight:700;color:var(--%NS%text-main);letter-spacing:-.02em;margin-bottom:.35rem}.js-content-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem}.js-action-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;padding:.35rem .75rem;background:#ffffff0a;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);color:var(--%NS%text-muted);font-size:.78rem;font-family:var(--%NS%font-sans);cursor:pointer;transition:all .2s ease}.js-action-btn[_ngcontent-%COMP%]:hover{background:#00f5a014;border-color:#00f5a04d;color:var(--%NS%primary)}.js-accordion[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.js-accordion-item[_ngcontent-%COMP%]{background:var(--%NS%bg-card);border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);overflow:hidden;transition:border-color .25s ease}.js-accordion-item.expanded[_ngcontent-%COMP%]{border-color:#00f5a040;box-shadow:0 4px 24px #00f5a00f}.js-accordion-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:1.1rem 1.25rem;background:transparent;border:none;cursor:pointer;color:var(--%NS%text-main);font-family:var(--%NS%font-sans);font-weight:600;font-size:.97rem;text-align:left;gap:1rem;transition:background .2s ease}.js-accordion-header[_ngcontent-%COMP%]:hover{background:#ffffff06}.js-accordion-heading[_ngcontent-%COMP%]{flex:1}.js-accordion-chevron[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--%NS%text-dim);transition:transform .3s ease;flex-shrink:0}.expanded[_ngcontent-%COMP%]   .js-accordion-chevron[_ngcontent-%COMP%]{color:var(--%NS%primary)}.js-accordion-body[_ngcontent-%COMP%]{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.16,1,.3,1),padding .3s ease;padding:0 1.25rem}.js-accordion-body.open[_ngcontent-%COMP%]{max-height:3000px;padding:0 1.25rem 1.5rem}.js-content-line[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:.93rem;line-height:1.75;margin-bottom:.75rem}.js-content-line[_ngcontent-%COMP%]:last-child{margin-bottom:0}.js-content-line[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:var(--%NS%font-mono);font-size:.85em;padding:.1em .4em;background:#ffffff14;border:1px solid rgba(255,255,255,.1);border-radius:4px;color:var(--%NS%primary)}.js-content-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--%NS%text-main);font-weight:600}.js-content-line[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:var(--%NS%secondary);font-style:italic}.js-table-wrap[_ngcontent-%COMP%]{overflow-x:auto;margin:1rem 0;border-radius:var(--%NS%radius-md);border:1px solid var(--%NS%border-glass)}.js-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.87rem}.js-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#00f5a00f;color:var(--%NS%primary);font-family:var(--%NS%font-mono);font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;padding:.75rem 1rem;text-align:left;border-bottom:1px solid rgba(0,245,160,.15);white-space:nowrap}.js-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.7rem 1rem;color:var(--%NS%text-muted);border-bottom:1px solid var(--%NS%border-glass);vertical-align:top;line-height:1.5}.js-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.js-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#ffffff05;color:var(--%NS%text-main)}.js-code-block[_ngcontent-%COMP%]{margin:1rem 0;border-radius:var(--%NS%radius-md);overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#0d1117}.js-code-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:.6rem 1rem;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.js-code-dots[_ngcontent-%COMP%]{display:flex;gap:.3rem}.dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%}.dot.red[_ngcontent-%COMP%]{background:#ff5f57}.dot.yellow[_ngcontent-%COMP%]{background:#febc2e}.dot.green[_ngcontent-%COMP%]{background:#28c840}.js-code-lang[_ngcontent-%COMP%]{flex:1;font-size:.75rem;font-family:var(--%NS%font-mono);color:var(--%NS%text-dim);text-transform:uppercase;letter-spacing:1px}.js-copy-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.3rem;padding:.25rem .65rem;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--%NS%text-dim);font-size:.75rem;font-family:var(--%NS%font-sans);cursor:pointer;transition:all .2s ease;white-space:nowrap}.js-copy-btn[_ngcontent-%COMP%]:hover{background:#00f5a01a;border-color:#00f5a04d;color:var(--%NS%primary)}.js-copy-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.85rem}.js-pre[_ngcontent-%COMP%]{margin:0;padding:1.25rem;overflow-x:auto;font-family:var(--%NS%font-mono);font-size:.85rem;line-height:1.7;color:#e6edf3;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.1) transparent;white-space:pre}.js-pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;color:inherit;background:none;padding:0;border:none}.js-topic-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:3rem;padding-top:2rem;border-top:1px solid var(--%NS%border-glass);gap:1rem}.js-nav-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.25rem;background:var(--%NS%bg-card);border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);color:var(--%NS%text-muted);font-family:var(--%NS%font-sans);font-size:.88rem;font-weight:500;cursor:pointer;transition:all .25s ease;max-width:260px;text-align:left}.js-nav-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.js-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.1rem;flex-shrink:0}.js-nav-btn[_ngcontent-%COMP%]:hover{border-color:#00f5a059;color:var(--%NS%primary);background:#00f5a00d}.js-nav-btn.next[_ngcontent-%COMP%]{margin-left:auto}@media(max-width:1024px){.js-layout[_ngcontent-%COMP%]{grid-template-columns:260px 1fr}}@media(max-width:768px){.js-page[_ngcontent-%COMP%]{padding-top:70px}.js-hero[_ngcontent-%COMP%]{padding:2.5rem 0 2rem}.js-hero-inner[_ngcontent-%COMP%]{padding:0 1rem}.js-breadcrumb[_ngcontent-%COMP%]{flex-wrap:wrap;gap:.4rem;font-size:.8rem}.js-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.js-sidebar[_ngcontent-%COMP%]{position:relative;top:0;height:auto;border-right:none;border-bottom:1px solid var(--%NS%border-glass);padding:.85rem 1rem}.js-topic-list[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;gap:.4rem;padding-bottom:.5rem;-webkit-overflow-scrolling:touch;scrollbar-width:thin}.js-topic-btn[_ngcontent-%COMP%]{min-width:max-content;padding:.45rem .8rem;font-size:.8rem}.js-legend[_ngcontent-%COMP%]{display:none}.js-content[_ngcontent-%COMP%]{padding:1.5rem 1rem 3rem}.js-stats[_ngcontent-%COMP%]{flex-wrap:wrap;gap:.75rem 1.25rem;justify-content:center;padding:.65rem 1.25rem}.js-stat-divider[_ngcontent-%COMP%]{display:none}.js-topic-nav[_ngcontent-%COMP%]{flex-direction:column;gap:.75rem;align-items:stretch}.js-nav-btn[_ngcontent-%COMP%]{max-width:100%;width:100%;justify-content:center}.js-nav-btn.next[_ngcontent-%COMP%]{margin-left:0}}@media(max-width:480px){.js-page[_ngcontent-%COMP%]{padding-top:65px}.js-hero-title[_ngcontent-%COMP%]{font-size:1.65rem;line-height:1.25}.js-content-title[_ngcontent-%COMP%]{font-size:1.3rem}.js-accordion-header[_ngcontent-%COMP%]{padding:.85rem .9rem;font-size:.9rem}.js-accordion-body[_ngcontent-%COMP%]{padding:0 .9rem}.js-accordion-body.open[_ngcontent-%COMP%]{padding:0 .9rem 1.2rem}.js-pre[_ngcontent-%COMP%]{font-size:.78rem;padding:.85rem .7rem}.js-content-meta[_ngcontent-%COMP%]{flex-wrap:wrap;gap:.5rem}}`]})}}return t})();export{Ce as JavascriptFundamentals};
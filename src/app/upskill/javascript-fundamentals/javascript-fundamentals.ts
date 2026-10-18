import { Component, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface CodeBlock {
  language: string;
  code: string;
}

export interface TopicItem {
  heading: string;
  content: string[];
  codeBlocks?: CodeBlock[];
  table?: { headers: string[]; rows: string[][] };
}

export interface Topic {
  id: string;
  icon: string;
  title: string;
  badge?: string;
  items: TopicItem[];
}

@Component({
  selector: 'app-javascript-fundamentals',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrl: './javascript-fundamentals.css',
  templateUrl: './javascript-fundamentals.html',
})
export class JavascriptFundamentals {
  searchQuery = signal('');
  activeTopicId = signal('sync-async');
  expandedItems = signal<Set<string>>(new Set());
  copiedCode = signal<string | null>(null);

  readonly topics: Topic[] = [
    {
      id: 'sync-async',
      icon: '⚡',
      title: 'Synchronous vs Asynchronous',
      badge: 'Core',
      items: [
        {
          heading: 'Overview',
          content: [
            'JavaScript is a <strong>synchronous, single-threaded language</strong> — code executes line by line, one task at a time.',
            '<strong>Synchronous</strong>: Tasks execute one after another — JavaScript waits for each operation to complete before moving on.',
            '<strong>Asynchronous</strong>: JavaScript can start a task and continue executing without waiting for it to finish. Results are handled via callbacks, Promises, or <code>async/await</code>.',
          ],
        },
        {
          heading: 'Real-world Example',
          content: [
            'API calls, timers (<code>setTimeout</code>), and file operations are asynchronous — they run in the background so the rest of the app stays responsive.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `// Synchronous — blocks until done
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous — non-blocking
console.log("Start");
setTimeout(() => console.log("Async Task Done"), 1000);
console.log("End"); // logs before "Async Task Done"`,
            },
          ],
        },
      ],
    },
    {
      id: 'execution-context',
      icon: '🧠',
      title: 'Execution Context',
      badge: 'Core',
      items: [
        {
          heading: 'What is Execution Context?',
          content: [
            'Every time JavaScript runs code, it does so inside an <strong>Execution Context</strong> — a container with two phases:',
            '<strong>1. Memory Phase (Creation)</strong>: Variables are hoisted and assigned <code>undefined</code>; functions are stored entirely.',
            '<strong>2. Code Phase (Execution)</strong>: Code runs line by line, values are assigned.',
          ],
        },
        {
          heading: 'Two Components',
          content: [
            '<strong>Memory Component (Variable Environment)</strong> — stores variables and functions as key-value pairs.',
            '<strong>Code Component (Thread of Execution)</strong> — executes code line by line.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `var x = 10;

function greet(name) {
  var msg = "Hello, " + name;
  return msg;
}

var result = greet("Arjun");
console.log(result); // "Hello, Arjun"`,
            },
          ],
        },
      ],
    },
    {
      id: 'call-stack',
      icon: '📚',
      title: 'Call Stack',
      badge: 'Core',
      items: [
        {
          heading: 'How it works',
          content: [
            'The <strong>Call Stack</strong> is a LIFO (Last In, First Out) data structure that tracks which function is currently being executed.',
            'When a function is called, it is pushed onto the stack. When it returns, it is popped off.',
            'The Global Execution Context is always at the bottom. When the stack is empty, JavaScript is idle.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `function third()  { console.log("Third");  }
function second() { third(); console.log("Second"); }
function first()  { second(); console.log("First"); }

first();
// Stack: [Global] → [first] → [second] → [third]
// Output: Third → Second → First`,
            },
          ],
        },
      ],
    },
    {
      id: 'hoisting',
      icon: '🚀',
      title: 'Hoisting',
      badge: 'Tricky',
      items: [
        {
          heading: 'What is Hoisting?',
          content: [
            '<strong>Hoisting</strong> allows variables and functions to be accessed before they are declared in code.',
            '<code>var</code> declarations are hoisted and initialized with <code>undefined</code>.',
            'Function <em>declarations</em> are fully hoisted — they can be called before their definition.',
            '<code>let</code> and <code>const</code> are hoisted but remain in the <strong>Temporal Dead Zone (TDZ)</strong> — accessing them before declaration throws a <code>ReferenceError</code>.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `console.log(x); // undefined (var is hoisted)
var x = 5;

greet(); // ✅ Works — function declaration is fully hoisted
function greet() {
  console.log("Hello!");
}

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;`,
            },
          ],
        },
      ],
    },
    {
      id: 'let-const-tdz',
      icon: '🔒',
      title: 'let, const & the TDZ',
      badge: 'Interview ⭐',
      items: [
        {
          heading: 'Temporal Dead Zone (TDZ)',
          content: [
            'The <strong>TDZ</strong> is the time window between entering a scope and the moment a <code>let</code>/<code>const</code> variable is initialized.',
            'Accessing a variable in its TDZ throws a <code>ReferenceError: Cannot access \'x\' before initialization</code>.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `{
  // TDZ for 'name' starts here
  // console.log(name); // ❌ ReferenceError

  let name = "Arjun"; // TDZ ends here
  console.log(name);  // ✅ "Arjun"
}`,
            },
          ],
        },
        {
          heading: 'Are let & const Hoisted? (YES!)',
          content: [
            'A common myth: only <code>var</code> is hoisted. But <strong>let and const ARE hoisted too</strong>!',
            '<code>var</code> → Hoisted into <strong>Global/Function</strong> memory, initialized as <code>undefined</code>.',
            '<code>let</code>/<code>const</code> → Hoisted into a separate <strong>Script scope</strong>, remain <em>uninitialized</em> in TDZ.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `let x = "Global";
{
  // If x was NOT hoisted, it would log "Global"
  // Instead it throws ReferenceError → PROOF it was hoisted!
  console.log(x); // ❌ ReferenceError
  let x = "Local";
}`,
            },
          ],
        },
        {
          heading: 'var vs let vs const',
          content: [],
          table: {
            headers: ['Feature', 'var', 'let', 'const'],
            rows: [
              ['Scope', 'Function/Global', 'Block {}', 'Block {}'],
              ['Hoisted?', 'Yes (undefined)', 'Yes (TDZ)', 'Yes (TDZ)'],
              ['Re-declaration', 'Allowed', '❌ SyntaxError', '❌ SyntaxError'],
              ['Re-assignment', 'Allowed', 'Allowed', '❌ TypeError'],
              ['Attaches to window', 'Yes', 'No', 'No'],
            ],
          },
        },
        {
          heading: 'const with Objects (Mutation vs Reassignment)',
          content: [
            '<code>const</code> prevents <em>reassigning</em> the binding — it does NOT freeze the object properties.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `const person = { name: "Arjun", age: 25 };

// ✅ Mutating properties — ALLOWED
person.age = 26;
person.city = "Pune";

// ❌ Reassigning the reference — TypeError
// person = { name: "Rahul" };

// To truly freeze an object:
Object.freeze(person); // Now no properties can be modified`,
            },
          ],
        },
      ],
    },
    {
      id: 'undefined-null',
      icon: '❓',
      title: 'undefined vs null vs not defined',
      badge: 'Interview ⭐',
      items: [
        {
          heading: 'The Three Concepts',
          content: [
            '<strong>undefined</strong>: A primitive value automatically assigned by JavaScript to a declared but uninitialized variable.',
            '<strong>null</strong>: An intentional representation of "no value" — explicitly set by the developer.',
            '<strong>not defined</strong>: A <code>ReferenceError</code> — the variable was never declared anywhere in scope.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `var a;
console.log(a);         // undefined (declared, not initialized)
console.log(typeof a);  // "undefined"

let user = null;
console.log(user);        // null
console.log(typeof user); // "object" (historical JS bug!)

console.log(y); // ❌ ReferenceError: y is not defined`,
            },
          ],
        },
        {
          heading: 'Equality & Arithmetic',
          content: [],
          codeBlocks: [
            {
              language: 'js',
              code: `// Loose equality (coercion)
console.log(null == undefined);  // true
// Strict equality
console.log(null === undefined); // false

// Arithmetic
console.log(null + 1);      // 1   (null → 0)
console.log(undefined + 1); // NaN (undefined → NaN)`,
            },
          ],
        },
      ],
    },
    {
      id: 'scope-closure',
      icon: '🔗',
      title: 'Scope, Lexical Env & Scope Chain',
      badge: 'Core',
      items: [
        {
          heading: 'Types of Scope',
          content: [
            '<strong>Global Scope</strong>: Variables accessible from anywhere in the file.',
            '<strong>Function (Local) Scope</strong>: Variables declared inside a function — only accessible within it.',
            '<strong>Block Scope (ES6)</strong>: <code>let</code>/<code>const</code> inside <code>{}</code> are confined to that block.',
          ],
        },
        {
          heading: 'Lexical Environment & Scope Chain',
          content: [
            '<strong>Lexical Environment</strong> = Local Memory + Reference to Parent Lexical Environment.',
            'The <strong>Scope Chain</strong> is the lookup mechanism: JavaScript first checks local memory, then parent, then grandparent… up to global.',
            'If the variable is not found anywhere → <code>ReferenceError</code>.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `function a() {
  var b = 10;
  function c() {
    console.log(b); // 10 — found via scope chain in a()
  }
  c();
}
a();
// console.log(b); // ❌ ReferenceError — b is local to a()`,
            },
          ],
        },
      ],
    },
    {
      id: 'variable-shadowing',
      icon: '🌑',
      title: 'Variable Shadowing & Illegal Shadowing',
      badge: 'Tricky',
      items: [
        {
          heading: 'Variable Shadowing',
          content: [
            'When an inner scope variable has the <strong>same name</strong> as an outer scope variable, it <em>shadows</em> (hides) the outer one within that scope.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `var a = 100;
let b = 200;

{
  var a = 10;  // Shadows & OVERWRITES global a (var is not block-scoped!)
  let b = 20;  // Shadows outer b — only inside this block
  console.log(a); // 10
  console.log(b); // 20
}

console.log(a); // 10 (var leaked out!)
console.log(b); // 200 (let was NOT affected)`,
            },
          ],
        },
        {
          heading: 'Illegal Shadowing',
          content: [
            'You <strong>cannot</strong> shadow a <code>let</code>/<code>const</code> with <code>var</code> in the same or nested block. This causes a <code>SyntaxError</code>.',
            'Exception: Shadowing <code>let</code> with <code>var</code> <em>inside a function</em> is legal — the function boundary contains the <code>var</code>.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `// ❌ ILLEGAL — SyntaxError
let a = 20;
{
  var a = 20; // var tries to escape block and collides with let a
}

// ✅ LEGAL — var is contained within function scope
let x = 20;
function test() {
  var x = 50; // OK! Function boundary prevents escape
  console.log(x); // 50
}
test();
console.log(x); // 20 — unchanged`,
            },
          ],
        },
      ],
    },
    {
      id: 'closures',
      icon: '📦',
      title: 'Closures',
      badge: 'Interview ⭐',
      items: [
        {
          heading: 'Definition',
          content: [
            'A <strong>closure</strong> is a function bundled with its <em>lexical environment</em>.',
            'Even after an outer function has finished executing, the inner function still has access to the outer function\'s variables — it retains a reference to them.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `function outer() {
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
counter(); // 3`,
            },
          ],
        },
        {
          heading: 'Classic Use Cases',
          content: [
            'Data encapsulation / private variables',
            'Function factories / partial application',
            'Memoization',
            'Event handlers retaining state',
          ],
        },
      ],
    },
    {
      id: 'functions',
      icon: '🛠️',
      title: 'Functions: Types & Concepts',
      badge: 'Core',
      items: [
        {
          heading: 'Function Statement vs Expression',
          content: [],
          table: {
            headers: ['', 'Function Statement', 'Function Expression'],
            rows: [
              ['Definition', 'Named function with keyword', 'Function assigned to variable'],
              ['Hoisting', 'Fully hoisted ✅', 'Only variable is hoisted (undefined) ❌'],
              ['Call before definition?', 'Yes ✅', 'No ❌ — TypeError'],
            ],
          },
          codeBlocks: [
            {
              language: 'js',
              code: `// Function Statement (Declaration)
function add(a, b) { return a + b; }

// Function Expression
const multiply = function(a, b) { return a * b; };

// Anonymous Function
const greet = function() { console.log("Hi!"); };

// Named Function Expression
const sayHello = function hello() {
  console.log("Hello!");
};
sayHello(); // ✅
// hello(); // ❌ ReferenceError — name not in outer scope`,
            },
          ],
        },
        {
          heading: 'First-Class & Higher Order Functions',
          content: [
            '<strong>First-Class Functions</strong>: Functions are treated like values — they can be assigned to variables, passed as arguments, or returned from other functions.',
            '<strong>Higher Order Functions (HOF)</strong>: Functions that take another function as an argument (callback) and/or return a function.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `// HOF Example 1: taking a callback
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
console.log(radius.map(area)); // same result`,
            },
          ],
        },
        {
          heading: 'Parameters vs Arguments',
          content: [
            '<strong>Parameters</strong>: Identifiers listed in the function <em>definition</em>.',
            '<strong>Arguments</strong>: Actual values passed when calling the function.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `function add(a, b) { // a, b are PARAMETERS
  return a + b;
}
add(2, 3); // 2, 3 are ARGUMENTS`,
            },
          ],
        },
      ],
    },
    {
      id: 'call-apply-bind',
      icon: '🎯',
      title: 'call(), apply() and bind()',
      badge: 'Interview ⭐',
      items: [
        {
          heading: 'Purpose',
          content: [
            '<code>call</code>, <code>apply</code>, and <code>bind</code> let you <strong>explicitly set the <code>this</code> context</strong> of a function.',
          ],
          table: {
            headers: ['Method', 'Invocation', 'Arguments', 'Returns'],
            rows: [
              ['call()', 'Immediate', 'Comma-separated', 'Function result'],
              ['apply()', 'Immediate', 'Single array', 'Function result'],
              ['bind()', 'Deferred', 'Comma-separated', 'New bound function'],
            ],
          },
        },
        {
          heading: 'Examples',
          content: [],
          codeBlocks: [
            {
              language: 'js',
              code: `const person1 = { firstName: "Arjun", lastName: "Khade" };
const person2 = { firstName: "Rahul", lastName: "Sharma" };

function printName(city, state) {
  console.log(\`\${this.firstName} \${this.lastName} from \${city}, \${state}\`);
}

// call — args comma-separated
printName.call(person1, "Pune", "Maharashtra");

// apply — args as array
printName.apply(person2, ["Mumbai", "Maharashtra"]);

// bind — returns a NEW function (doesn't execute yet)
const printArjun = printName.bind(person1, "Pune");
printArjun("Maharashtra"); // call it later`,
            },
          ],
        },
        {
          heading: 'bind() Polyfill (Interview Classic)',
          content: ['Write a custom <code>myBind</code> from scratch:'],
          codeBlocks: [
            {
              language: 'js',
              code: `Function.prototype.myBind = function(context, ...args) {
  const originalFunc = this;
  return function(...newArgs) {
    return originalFunc.apply(context, [...args, ...newArgs]);
  };
};

const boundFn = printName.myBind(person1, "Pune");
boundFn("Maharashtra"); // "Arjun Khade from Pune, Maharashtra"`,
            },
          ],
        },
      ],
    },
    {
      id: 'event-loop',
      icon: '🔄',
      title: 'Event Loop, Microtask & Macrotask',
      badge: 'Interview ⭐',
      items: [
        {
          heading: 'Architecture',
          content: [
            '<strong>Call Stack</strong>: Executes JS code (LIFO).',
            '<strong>Web APIs</strong>: Handles background work (timers, fetch, DOM events).',
            '<strong>Microtask Queue (HIGH priority)</strong>: Promises, <code>async/await</code>, <code>queueMicrotask()</code>.',
            '<strong>Macrotask Queue (lower priority)</strong>: <code>setTimeout</code>, <code>setInterval</code>, DOM events, I/O.',
            '<strong>Event Loop</strong>: When the Call Stack is empty, drains ALL microtasks first, then runs ONE macrotask.',
          ],
        },
        {
          heading: 'Priority Rule',
          content: [
            '🏆 <strong>Sync Code</strong> → <strong>All Microtasks</strong> → <strong>One Macrotask</strong> (repeat)',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `console.log("1. Sync Start");

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
// 2. Macrotask: setTimeout`,
            },
          ],
        },
      ],
    },
    {
      id: 'shallow-deep-copy',
      icon: '📋',
      title: 'Shallow Copy vs Deep Copy',
      badge: 'Tricky',
      items: [
        {
          heading: 'Shallow Copy',
          content: [
            'A <strong>shallow copy</strong> creates a new object, but <em>nested objects/arrays are still shared references</em>.',
            'Changing a nested property in the copy also affects the original.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `const person = { name: "Arjun", address: { city: "Pune" } };
const copy = { ...person }; // Shallow copy

copy.name = "Rahul";        // ✅ Independent (primitive)
copy.address.city = "Mumbai"; // ❌ Affects original! (shared reference)

console.log(person.address.city); // "Mumbai" — mutated!

// Other shallow copy methods:
const copy2 = Object.assign({}, person);
const arrCopy = [...arr];`,
            },
          ],
        },
        {
          heading: 'Deep Copy',
          content: [
            'A <strong>deep copy</strong> creates a completely independent copy — including all nested structures.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `const person = { name: "Arjun", address: { city: "Pune" } };

// ✅ Modern (recommended) — preserves Date, Set, Map, etc.
const deepCopy = structuredClone(person);
deepCopy.address.city = "Mumbai";
console.log(person.address.city); // "Pune" — unchanged!

// Older approach — has limitations (loses functions, Date, undefined)
const oldCopy = JSON.parse(JSON.stringify(person));`,
            },
          ],
        },
      ],
    },
    {
      id: 'es6',
      icon: '✨',
      title: 'ES6+ Features',
      badge: 'Must Know',
      items: [
        {
          heading: 'Arrow Functions',
          content: [
            'Shorter syntax + <strong>lexically binds <code>this</code></strong> (inherits from enclosing scope).',
            'Cannot be used as constructors. No own <code>arguments</code>, <code>super</code>, or <code>new.target</code>.',
          ],
          codeBlocks: [
            {
              language: 'js',
              code: `const add = (a, b) => a + b;
const square = x => x * x;

// Lexical this
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // 'this' refers to Timer instance ✅
  }, 1000);
}`,
            },
          ],
        },
        {
          heading: 'Destructuring, Spread & Rest',
          content: [],
          codeBlocks: [
            {
              language: 'js',
              code: `// Object Destructuring with rename & defaults
const { firstName: name, role, salary = 50000 } = developer;

// Array Destructuring & skip
const [red, , blue] = [255, 140, 0];

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];

// Spread — expands
const merged = [...arr1, ...arr2];
const updated = { ...defaults, fontSize: 16 };

// Rest — collects
function sum(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}`,
            },
          ],
        },
        {
          heading: 'Promises, async/await & Combinators',
          content: [],
          codeBlocks: [
            {
              language: 'js',
              code: `// async/await
async function getUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// Promise Combinators
// Promise.all — fails fast on first rejection
// Promise.allSettled — waits for all, never rejects
// Promise.any — first resolution wins
// Promise.race — first settlement wins`,
            },
          ],
        },
        {
          heading: 'Modern Features (ES2020–ES2023)',
          content: [],
          codeBlocks: [
            {
              language: 'js',
              code: `// Optional Chaining (?.) — ES2020
user?.profile?.address?.city; // undefined, not TypeError

// Nullish Coalescing (??) — ES2020
// Returns fallback ONLY for null/undefined (unlike || which covers all falsy)
const speed = config.speed ?? 300; // 0 is preserved!

// Logical Assignment — ES2021
b ??= "Default"; // assign only if null/undefined
count ||= 1;      // assign only if falsy
token &&= \`Bearer \${token}\`; // assign only if truthy

// structuredClone — built-in deep copy
const copy = structuredClone(original);

// Immutable Array methods — ES2023
const sorted = nums.toSorted();     // doesn't mutate
const reversed = nums.toReversed(); // doesn't mutate
const updated = nums.with(0, 99);   // replaces index 0`,
            },
          ],
        },
      ],
    },
  ];

  filteredTopics = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.topics;
    return this.topics.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.items.some(
          (item) =>
            item.heading.toLowerCase().includes(q) ||
            item.content.some((c) => c.toLowerCase().includes(q))
        )
    );
  });

  setActiveTopic(id: string) {
    this.activeTopicId.set(id);
    this.expandedItems.set(new Set()); // reset expanded on topic change
  }

  toggleItem(key: string) {
    const current = new Set(this.expandedItems());
    if (current.has(key)) {
      current.delete(key);
    } else {
      current.add(key);
    }
    this.expandedItems.set(current);
  }

  isExpanded(key: string): boolean {
    return this.expandedItems().has(key);
  }

  activeTopic = computed(() =>
    this.filteredTopics().find((t) => t.id === this.activeTopicId()) ??
    this.filteredTopics()[0]
  );

  async copyCode(code: string, id: string) {
    try {
      await navigator.clipboard.writeText(code);
      this.copiedCode.set(id);
      setTimeout(() => this.copiedCode.set(null), 2000);
    } catch {}
  }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const el = document.getElementById('js-search');
      el?.focus();
    }
  }
}

# What is computer memory?

Computer memory is the hardware that stores data and instructions
that are currently being processed by the CPU (Central Processing Unit) of a computer.
It provides a way for the computer to access data quickly and efficiently.

There are two main types of computer memory: primary memory and secondary memory.

Primary memory, aka RAM (Random Access Memory) is used to temporarily store data and instructions
that the CPU needs to access quickly.

Secondary memory, such as hard drives and solid-state drives (SSDs) is used to permanently store data
and instructions.

### Things to know about memory to become a great developer:

1. Memory Allocation

When writing code, we need to allocate memory to store data and instructions.
You need to know how to allocate memory efficiently, and avoid memory leaks,
which can cause program to crash or slow down.

2. Memory Management

When you store memory than you need to manage it. This means freeing up memory that is
no longer needed and avoiding memory fragmentation, which can make it difficult to allocate
memory efficiently.

3. Memory Access

Accissing memory can be a slow process so alway optimize memory access with caching and
avoiding unnecessary memory accesses.

4. Memory Limits:

Different computer systems have different memory limits. It is important to know what those are.

5. Memory Types:

RAM - fast but expensive.

Hard drives - slow but cheaper.

Understanding different memory types can help you design more efficient systems.

### Heap vs Stack

Heap and stack memory are both parts of the computer's RAM (Random Access Memory), which is a type of volatile memory used to store data and instructions temporarily during program execution.

Stack memory is used to store local variables and function calls. When a function is called, its local variables are allocated on the stack, and when the function returns, the memory used by the local variables is automatically released. Stack memory is managed automatically by the system and has a fixed size, typically determined at compile time.

Heap memory, on the other hand, is used for dynamic memory allocation, where memory is allocated and deallocated manually during program execution. Heap memory is used for storing data that needs to be accessed across multiple functions or for data that needs to be allocated dynamically based on runtime conditions. Unlike stack memory, heap memory can grow or shrink dynamically during program execution.

Both heap and stack memory are part of the computer's RAM, but they serve different purposes and are managed differently. While stack memory is managed automatically by the system, heap memory must be managed manually by the programmer. Poor heap memory management can result in memory leaks, fragmentation, and other performance issues.

### Best Practises for managing memory correctly in a React App:

Here are some best practices to manage heap memory in a React app:

Use useEffect and useState hooks wisely: The useEffect and useState hooks are powerful tools for managing state in React, but they can also be a source of memory leaks if used improperly. Be sure to clean up any resources used by your components, such as event listeners, subscriptions, and timers, in the useEffect cleanup function. Also, be mindful of how you update state using useState to avoid unnecessary re-renders and memory usage.

Avoid unnecessary data fetching: Fetching data from APIs can be a common source of memory leaks, especially if data is fetched frequently or excessively. Avoid fetching unnecessary data, and be sure to clean up any resources used by your fetch requests, such as AbortController instances.

Use Memoization: Memoization is a technique that can help you optimize React component performance by caching the results of expensive function calls. This can help reduce unnecessary calculations and memory usage.

Use Lazy Loading and Code Splitting: Lazy loading and code splitting are techniques that can help reduce the initial load time and memory usage of your app by loading only the components and resources that are necessary for the current screen. This can help improve the perceived performance of your app and reduce memory usage.

Use Performance Profiling Tools: Use performance profiling tools like Chrome DevTools to identify performance bottlenecks and memory leaks in your app. These tools can help you identify components and functions that are using excessive memory, and optimize them for better performance.

By following these best practices, you can help ensure that your React app is using heap memory efficiently, minimizing memory leaks and performance issues.


Module - * module is a Reusable piece of code that encapsulates implementation details;
         * usually a stand alone file, but it doesn't have to be.
        
        - it also has "import" and "export"
            - import = Dependency
            - export = Public API



Compose Software : Modules are small building blocks that we put together to build complx applications;

Isolation components : Modules can be developed in isolation without thinking about the entire codebase;

Abstract code : Implement low-level code in modules and import these abstractions into other modules ;

Organized code : Modules naturally lead to a more organized codebase;

Reuse code : Modules allow us to easily reuse the same code , even across multiple projects.


** Native Javascript (ES6) Modules **

                            (ES6) Modules               Scripts

Top-level variables  -        Scoped to module            global
Default mode         -        strict mode                 "sloppy" mode
Top-level this       -        undefined                   window  
Imports and exports  -        yes                         no
HTML linking         -        <script type = "module">    <script>
File downloading     -        Asynchronous                Synchronous




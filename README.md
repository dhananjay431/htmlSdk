```mermaid
graph TD
A[start] --> |get in| B{num > 0}
B--> true[true]
B--> false[false]
true --> End[end]
false --> End[end]
```

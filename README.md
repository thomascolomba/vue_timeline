# timeline

## Project setup
```
Set of forms the user should go through
src/events/BusinessEventList.js -> list of business events (events understood by the customer)
src/components/RoutingManager -> deal with the routing application, routing is driven by events to display the right form
src/components/Timeline -> deal with the user's progression through the forms
src/views/Step* -> screens who contain forms and emit events to drive Routing and Timeline

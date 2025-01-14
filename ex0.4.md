```mermaid
sequenceDiagram
    participant User
    participant WebPage
    participant Server
    participant Database

    User->>WebPage: Enters text in the text field
    User->>WebPage: Clicks the Save button
    WebPage->>Server: Sends the note data (text) to the server
    Server->>Database: Saves the note to the database
    Database-->>Server: Confirms note saved
    Server-->>WebPage: Responds with success message
    WebPage-->>User: Displays success message on the page

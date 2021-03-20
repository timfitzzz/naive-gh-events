# naive-gh-events
Render event objects from the GitHub API to natural English, in plaintext or markdown. TypeScript definitions are included. [Check out a demo here](https://timfitzzz.github.io/naive-gh-events-demo).

### Example output:

Markdown:

> [timfitzzz](https://github.com/timfitzzz) started watching repository [mohebifar/react-use-context-selector](https://github.com/mohebifar/react-use-context-selector)  
>  
> [pgillan145](https://github.com/pgillan145) created repository [pgillan145/AudioPulse](https://github.com/pgillan145/AudioPulse)  
> 
> [kii-chan-reloaded](https://github.com/kii-chan-reloaded) created wiki page [Pain](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Pain) in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)  
> 
> [kii-chan-reloaded](https://github.com/kii-chan-reloaded) edited 2 wiki pages in [kii-chan-reloaded/GeneticChickengineering](https://github.com/kii-chan-reloaded/GeneticChickengineering)
> * [Home](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home) 
> * [Settings](https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)  

plaintext:
```
timfitzzz started watching repository mohebifar/react-use-context-selector 
pgillan145 created repository pgillan145/AudioPulse 
kii-chan-reloaded created wiki page Pain in kii-chan-reloaded/GeneticChickengineering 
kii-chan-reloaded edited 2 wiki pages in kii-chan-reloaded/GeneticChickengineering 
  Home (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Home)
  Settings (https://github.com/kii-chan-reloaded/GeneticChickengineering/wiki/Settings)
```

### Table of Contents
1. [How it Works](#how-it-works) 
2. [Supported Event Types](#supported-event-types) 
3. [How to Install](#how-to-install) 
4. [How to Use](#how-to-use) 
5. [API](#api) 

## How it Works

naive-gh-events takes a generalized approach to interpreting the contents of GitHub event objects. Each event type can be boiled down into several linguistic abstractions, based on various properties of the event:

* **actor**: the user (person or bot) whose action generates the event  
* **verb**: expresses the action taken  
* **result**: in general terms, the result of the action  
* **subject**: the product(s) of the action  
* **target**: what the action is taken upon  
* **parent**: the context within which the action occurs  

By generating event-specific language outputs, each of these can be manipulated sensitively to provide natural language summaries for single events, as well as to group events in a way that makes sense. 

In addition, naive-gh-events' markdown output (default) contains URIs, making it quite easy to use this library to create a custom GitHub event tracking solution using only Markdown rendering. 

In sum, this implementation provides natural language and event collation functionality already used to generate social feeds on GitHub.com, but which are not provided by existing official or semi-official GitHub API libraries. 

## Supported Event Types

Supported event types and subtypes (see [note on untested or missing types](#missingTypes)):

| type                          | subtypes *(not explicitly tested)*                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| CommitCommentEvent            | n/a                                                                                                                                         |
| CreateEvent                   | repository, branch,*tag*                                                                                                                    |
| DeleteEvent                   | *repository*, branch, *tag*                                                                                                                 |
| ForkEvent                     | n/a                                                                                                                                         |
| GollumEvent                   | created, edited                                                                                                                             |
| IssueCommentEvent             | created, *edited*, *deleted*                                                                                                                |
| IssuesEvent                   | *opened*, closed, *reopened*, *assigned*, *unassigned*, *labeled*, *unlabeled*                                                              |
| MemberEvent                   | added, *edited*, *removed*                                                                                                                  |
| PublicEvent                   | n/a                                                                                                                                         |
| PullRequestEvent              | *opened*, closed, *reopened*, *assigned*, *unassigned*, *review_requested*, *review_request_removed*, *labeled*, *unlabeled*, *synchronize* |
| PullRequestReviewCommentEvent | created, *edited*, *deleted*                                                                                                                |
| PullRequestReviewEvent        | created, *edited*, *deleted*                                                                                                                |
| PushEvent                     | n/a                                                                                                                                         |
| ReleaseEvent                  | published, *edited*                                                                                                                         |
| *SponsorshipEvent*            | *added*, *removed*                                                                                                                          |
| WatchEvent                    | n/a                                                                                                                                         |

 
--------------
##    
## How to install 
With NPM: 
``` 
> npm install naive-gh-events
``` 

With Yarn: 
```
> yarn add naive-gh-events
```

## How to use
First, import the module in your TypeScript or JavaScript file:
### EJS
```
import { renderEvents } from 'naive-gh-events'
```
### CJS
```
const { renderEvents } = require('naive-gh-events')
```

Now you can use renderEvents to generate human-readable English from any[*](#missingTypes) Github API event:
```
import axios from 'axios'

axios.request('https://api.github.com/events').then(data => {

  let renderedEventCollectionSets = data.data

  renderedEventCollectionSets.map(renderedEventCollectionSet => {
    
    console.log(renderedEventCollectionSet.startDate) 
    // startDate: falls on or before first event date

    console.log(renderedEventCollectionSet.endDate)
    // endDate: falls on or after final event date

    console.log(renderedEventCollectionSet.renderedEventCollections.join(""))
    // renderedEventCollections is an array of strings, each containing a summary of one or more events, and possibly subsequent lines of text containing further contents.

  })

})
```

## <a name="api">API</a>
### <a name="renderEvents">renderEvents(events: GHEvents[], options: NaiveOptions): RenderedEventCollectionSet[]</a>

**renderEvents** accepts two arguments:
* events: an array of GitHub events
* options: a [NaiveConfig](#naive-config) object containing configuration options that affect rendering output 

And it returns an array of RenderedEventCollectionSet objects:

| key                      | type     | value                                                          |
| ------------------------ | -------- | -------------------------------------------------------------- |
| startDate                | Date     | beginning of collected events range                            |
| endDate                  | Date     | end of collected events range                                  |
| renderedEventCollections | string[] | strings representing rendered events (individual or collapsed) |

These string sets are designed to be joined without further manipulation, rendering complete sets of events over a specific range of time. They are nonetheless returned as an array of strings to allow further processing without losing knowledge of which lines of text share closer relationship.

### <a name="naive-config">NaiveConfig: { [key: string]: value }</a>

You can provide the following options to renderEvents to control the resulting output. You can demo the result of changing these settings on [the naive-gh-events demo here](https://timfitzzz.github.io/naive-gh-events-demo).

| key                   | type          | range                                                                                                                     | default            | comment                                                                                                                                                                                                |
| --------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| collapse              | boolean       | true or false                                                                                                             | true               | if true, the output will combine events within the same date range that differ only in subject                                                                                                         |
| sortBy                | string        | 'date', 'actor', 'type', 'target', 'parent'                                                                               | 'date'             | which mapped field's value should events be sorted by?                                                                                                                                                 |
| reverseSortOrder      | boolean       | true or false                                                                                                             | false              | reverse effect of sortBy field                                                                                                                                                                         |
| dateSummaries         | boolean       | true or false                                                                                                             | false              | include event dates at beginning of summaries                                                                                                                                                          |
| dateContent           | boolean       | true or false                                                                                                             | false              | include event dates in content when there are multiple reflected events                                                                                                                                |
| groupByDays           | number        | any                                                                                                                       | 7                  | number of days to group events by. with "collapse: true", determines which events will be collated. with "collapse: false", events will be individually listed, but still collected by this date span. |
| groupStartDay         | number        | 0-6                                                                                                                       | 0                  | number of weekday to start event groups from                                                                                                                                                           |
| startDate             | Date          | any                                                                                                                       | 1/1/1970           | the date to begin processing events from. this is aimed at helping to automatically discard already-processed events.                                                                                  |
| md                    | boolean       | true or false                                                                                                             | true               | render output in Markdown (if false, use plaintext)                                                                                                                                                    |
| omitContent           | boolean       | true or false                                                                                                             | false              | render only summary lines                                                                                                                                                                              |
| indentContent         | boolean       | true or false                                                                                                             | true               | indent content lines as unordered list items (Markdown) or using two spaces (plaintext)                                                                                                                |
| dateTimeFormatOptions | LocaleOptions | [see Luxon documentation](https://moment.github.io/luxon/docs/manual/formatting.html#tolocalestring--strings-for-humans-) | DateTime.DATE_FULL | date/time formatting options as produced by Luxon. the default is Luxon's DateTime.DATE_FULL preset.                                                                                                   |
| newLinesBetween       | boolean       | true or false                                                                                                             | true               | double-space between event blocks (individual events or collapsed sets, if 'collapse' is true.)                                                                                                        |












----
#### <a name="missingTypes">Outstanding Type Definitions</a> ####
It turns out that GitHub's API defines some event types that either are never or rarely publicly displayed or no longer used (SponsorshipEvent). Pending further work to define and test event mappings for these types, they are not supported.

Additionally, several types of GitHub events have two or more subtypes. While mappings are often similar for different subtypes, I have not yet seen several of them while scraping the API. As such, these are awaiting further testing for full support.
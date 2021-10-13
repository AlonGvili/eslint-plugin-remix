# eslint-plugin-remix

Very simple eslint plugin for Remix.run framework, this plugin check that you export route function like loader, action, meta, links

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-remix`:

```sh
npm install eslint-plugin-remix --save-dev
```

## Usage

Add `remix` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "remix"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "remix/route-loader-exported": 2,
        "remix/route-action-exported": 2,
        "remix/route-links-exported": 2,
        "remix/route-meta-exported": 2,
    }
}
```

## Supported Rules



> `route-loader-exported` Check if a route has a loader function and it is exported 

> `route-action-exported` Check if a route has an action function and it is exported 

> `route-links-exported` Check if a route has a links function and it is exported 

> `route-meta-exported` Check if a route has a meta function and it is exported 





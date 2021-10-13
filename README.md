# eslint-plugin-remix

Very simple eslint plugin for Remix.run framework, this plugin check that you don't forget to export route functions like loader, action, meta, links

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@alongvili/eslint-plugin-remix`:

```sh
npm install @alongvili/eslint-plugin-remix --save-dev
```

## Usage

Add `remix` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@alongvili/remix"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@alongvili/remix/route-loader-exported": 2,
        "@alongvili/remix/route-action-exported": 2,
        "@alongvili/remix/route-links-exported": 2,
        "@alongvili/remix/route-meta-exported": 2,
    }
}
```

## Supported Rules



> `route-loader-exported` Check if a route has a loader function and it is exported 

> `route-action-exported` Check if a route has an action function and it is exported 

> `route-links-exported` Check if a route has a links function and it is exported 

> `route-meta-exported` Check if a route has a meta function and it is exported 





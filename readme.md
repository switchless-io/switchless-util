## Modules

<dl>
<dt><a href="#module_@switchless/util">@switchless/util</a></dt>
<dd><p>Helper and middleware function for node and express based apps.</p>
</dd>
<dt><a href="#module_helper">helper</a></dt>
<dd></dd>
<dt><a href="#module_middleware">middleware</a></dt>
<dd></dd>
</dl>

<a name="module_@switchless/util"></a>

## @switchless/util
Helper and middleware function for node and express based apps.

**Example**  
Installation
```sh
npm install @switchless-io/util
```

Usage
```js
const switchlessUtil = require('@switchless/util')
```
<a name="module_helper"></a>

## helper

* [helper](#module_helper)
    * [.formatNumber(number, number_format, precision)](#module_helper.formatNumber) ⇒ <code>string</code>
    * [.logger(level)](#module_helper.logger) ⇒ <code>object</code>

<a name="module_helper.formatNumber"></a>

### switchlessUtil.helper.formatNumber(number, number_format, precision) ⇒ <code>string</code>
number - the number to be formatted
number_format - what format do you want the number to be formatted in. 
precision - if the number has decimals, then what precision do you want to show

egs of number format 
- indian_thousand
- indian_lakh
- indian_crore
- us_thousand
- us_million
- us_billion

precision - takes in any integer. Most commonly used - 1 or 2

**Kind**: static method of [<code>helper</code>](#module_helper)  

| Param | Type |
| --- | --- |
| number | <code>\*</code> | 
| number_format | <code>\*</code> | 
| precision | <code>\*</code> | 

<a name="module_helper.logger"></a>

### switchlessUtil.helper.logger(level) ⇒ <code>object</code>
**Kind**: static method of [<code>helper</code>](#module_helper)  

| Param | Type |
| --- | --- |
| level | <code>string</code> | 

<a name="module_middleware"></a>

## middleware

* [middleware](#module_middleware)
    * [.requestLogger(req, res, next)](#module_middleware.requestLogger) ⇒ <code>callback</code>
    * [.JWTAuth(secret)](#module_middleware.JWTAuth) ⇒ <code>function</code>
    * [.sanitizeHTML(req, res, next)](#module_middleware.sanitizeHTML) ⇒ <code>callback</code>
    * [.rateLimit(redis_host)](#module_middleware.rateLimit) ⇒ <code>function</code>

<a name="module_middleware.requestLogger"></a>

### switchlessUtil.middleware.requestLogger(req, res, next) ⇒ <code>callback</code>
**Kind**: static method of [<code>middleware</code>](#module_middleware)  

| Param | Type |
| --- | --- |
| req | <code>\*</code> | 
| res | <code>\*</code> | 
| next | <code>\*</code> | 

<a name="module_middleware.JWTAuth"></a>

### switchlessUtil.middleware.JWTAuth(secret) ⇒ <code>function</code>
**Kind**: static method of [<code>middleware</code>](#module_middleware)  

| Param | Type |
| --- | --- |
| secret | <code>\*</code> | 

<a name="module_middleware.sanitizeHTML"></a>

### switchlessUtil.middleware.sanitizeHTML(req, res, next) ⇒ <code>callback</code>
**Kind**: static method of [<code>middleware</code>](#module_middleware)  

| Param | Type |
| --- | --- |
| req | <code>\*</code> | 
| res | <code>\*</code> | 
| next | <code>\*</code> | 

<a name="module_middleware.rateLimit"></a>

### switchlessUtil.middleware.rateLimit(redis_host) ⇒ <code>function</code>
**Kind**: static method of [<code>middleware</code>](#module_middleware)  

| Param | Type |
| --- | --- |
| redis_host | <code>string</code> | 


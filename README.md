# Web Form Action


## Recipes

### Array
```html
<input name="items.0" value="value1" />
<input name="items.1" value="value2" />
```

If we convert the FormData to object, it will look something like this:
```json
{
  "items": [
    "value1",
    "value2"
  ]
}
```

---

### Nested Property
```html
<input name="customer.name" value="Alex" />
<input name="customer.email" value="alex@example.com" />
```

If we convert the FormData to object, it will look something like this:
```json
{
  "customer": {
    "name": "Alex",
    "email": "alex@example.com"
  }
}
```

---

### Object Array
```html
<input name="items.0.name" value="value1" />
<input name="items.1.name" value="value2" />
```

If we convert the FormData to object, it will look something like this:
```json
{
  "items": [
    {
      "name": "value1"
    },
    {
      "name": "value2"
    }
  ]
}
```

---
sidebar_position: 1
sidebar_label: Design System Core
---

# Design System Core

## Button

A button component presents two variants: `primary` for the call-to-action use case and `secondary` for regular usage. It usually has rounder borders, can display an icon, or it can be text only.

```tsx
 <Button variant="secondary" label="Click me" onClick={handleClick}>
```

## Card

A container of information that has predefined styles following the AKASHA design language. It has rounded borders and displays a box-shadow by default, making it useful for structuring elements in apps. It can be used as an entry point for other, more detailed elements:

```tsx
  <Card elevation={1} padding="p-4">
    <Stack>
      <ExampleComponent1 />
      <ExampleComponent2 />
    </Stack>
    <Stack>
      <ExampleComponent3 />
      <ExampleComponent4 />
    </Stack>
  </Card>
```


## Checkbox

A checkbox component is used to take user input in forms and other related fields.

```tsx
<Checkbox label={'Checkbox'} name="check1" value="check1" handleChange={handleCheckbox} isSelected={isChecked} isDisabled={disableCheckbox} />
```

## Stack

A Stack is a container that lays out its content in particular direction (column, by default) using flexbox. It can be used to arrange other components:

```tsx
  <Stack direction="row" spacing="gap-4" padding="p-4" fullWidth>
    <ExampleComponent1 />
    <ExampleComponent2 />
  </Stack>
```

## Toggle

A toggle component has multiple sizes amongst other properties such as `disabled`, `checked`.

```tsx
 <Toggle checked={isChecked} onChange={handleToggle} size="small">
```

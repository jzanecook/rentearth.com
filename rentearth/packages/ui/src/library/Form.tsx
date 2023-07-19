import {
  H1,
  H2,
  Paragraph,
  Input,
  Label,
  Card,
  Image,
  Button,
  Form,
  Text,
  H3,
  H4,
  SizeTokens,
  SizableText,
  Spinner,
  XStack,
  YStack,
  YGroup,
  Separator,
  ListItem,
} from 'tamagui'

import { tasker, status$ } from './Storage'
import { useStore } from '@nanostores/react'
import { WritableAtom } from 'nanostores'

import { useLink } from 'solito/link'

interface FieldConfig {
  data: string
  storage: WritableAtom
}

interface LinkConfig {
  data: string
  link: string
}


export const FormLink = (props: LinkConfig) => {
  return (
    <XStack alignItems="center" space="$1">
      <Button
        {...useLink({
          href: props.link,
        })}
      >
        <H3>{props.data}</H3>
      </Button>
    </XStack>
  )
}

export const FormField = (props: FieldConfig) => {
  return (
    <XStack alignItems="center" space="$1">
      <Label htmlFor={props.data} width={80} size={'$1'}>
        {`${props.data}:`}
      </Label>
      <Input
        id={props.data}
        flex={1}
        size={'$4'}
        onChangeText={(newText) => tasker(props.storage, newText)}
        value={useStore(props.storage) ?? ''}
        placeholder={`Your ${props.data}!`}
      />
    </XStack>
  )
}
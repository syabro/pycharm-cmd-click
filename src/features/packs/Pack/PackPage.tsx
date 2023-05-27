import { Button } from 'ui/Button/Button'

type Props = {
  packId?: string
}

export const PackPage = (props: Props) => {
  return (
    <>
      <Button label='Cancel' size='xs' color='danger' outline={true} />
    </>
  )
}
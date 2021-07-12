import React from 'react'
import Button from './Button'
import { cleanup, fireEvent, render } from '@testing-library/react'

afterEach(() => {
  cleanup()
})

describe('When the Button is rendered', () => {
  describe('And is Primary', () => {
    it('should match with the snapshot', () => {
      const { container } = render(<Button primary={true} label={'Snapshot'} />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('And is Secondary', () => {
    it('should match with the snapshot', () => {
      const { container } = render(<Button primary={true} label={'Snapshot'} />)
      expect(container).toMatchSnapshot()
    })
  })
})

describe('When the Button is clicked', () => {
  it('should dispach the onclick function', () => {
    const mockedOnClick = jest.fn()

    const { getByRole } = render(
      <Button primary={true} label={'Snapshot'} onClick={mockedOnClick} />
    )

    fireEvent.click(getByRole('button'))

    expect(mockedOnClick).toBeCalledTimes(1)
  })
})

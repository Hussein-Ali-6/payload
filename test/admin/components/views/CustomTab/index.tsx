import { notFound } from 'next/navigation.js'
import React, { Fragment } from 'react'

import type { ServerSideEditViewProps } from '../../../../../packages/payload/types.js'

import { SetStepNav } from '../../../../../packages/ui/src/index.js'
import { customTabViewTitle } from '../../../shared.js'

export const CustomTabView: React.FC<ServerSideEditViewProps> = ({ initPageResult }) => {
  if (!initPageResult) {
    notFound()
  }

  return (
    <Fragment>
      <SetStepNav
        nav={[
          {
            label: 'Custom Tab View',
          },
        ]}
      />
      <div
        style={{
          marginTop: 'calc(var(--base) * 2)',
          paddingLeft: 'var(--gutter-h)',
          paddingRight: 'var(--gutter-h)',
        }}
      >
        <h1 id="custom-view-title">{customTabViewTitle}</h1>
        <p>This custom view was added through the Payload config:</p>
        <ul>
          <li>
            <code>components.views[key].Component</code>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

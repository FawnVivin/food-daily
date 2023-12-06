import type { PropsWithChildren } from 'react'

type DialogBlockBaseProps = {
    hideDialog: ()=>void
    show:boolean
}

export type DialogBlockProps = PropsWithChildren<DialogBlockBaseProps>

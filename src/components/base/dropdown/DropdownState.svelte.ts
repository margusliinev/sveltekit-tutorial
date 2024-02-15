export type DropdownState = {
    open: boolean
    handleClick?: () => void
    handleKeyDown?: (event: KeyboardEvent) => void
    handleOutsideClick?: (event: FocusEvent) => void
}

export function createDropdownState(initial: DropdownState) {
    let open = $state(initial.open)

    function handleClick() {
        open = !open
    }

    function handleKeyDown(event: KeyboardEvent) {
        const key = event.key
        if (open && key === 'Escape') open = false
    }

    function handleOutsideClick(event: FocusEvent) {
        const element = event?.relatedTarget as HTMLElement
        if (open && !element?.closest('[role="menu"]')) open = false
    }

    return {
        ...initial,

        get open() {
            return open
        },

        set open(value) {
            open = value
        },

        handleClick,
        handleKeyDown,
        handleOutsideClick
    }
}

// export class CreateDropdownState {
//     open = $state(false)

//     constructor(initial: DropdownState) {
//         this.open = initial.open
//         this.handleClick = this.handleClick.bind(this)
//         this.handleKeyDown = this.handleKeyDown.bind(this)
//         this.handleOutsideClick = this.handleOutsideClick.bind(this)
//     }

//     handleClick() {
//         this.open = !this.open
//     }

//     handleKeyDown(event: KeyboardEvent) {
//         const key = event.key
//         if (this.open && key === 'Escape') this.open = false
//     }

//     handleOutsideClick(event: FocusEvent) {
//         const element = event?.relatedTarget as HTMLElement
//         if (this.open && !element?.closest('[role="menu"]')) this.open = false
//     }
// }

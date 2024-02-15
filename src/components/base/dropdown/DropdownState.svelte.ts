export type DropdownState = {
    open: boolean
    handleClick?: () => void
    handleEscape?: (event: KeyboardEvent) => void
    handleKeyDown?: (event: KeyboardEvent) => void
    handleOutsideClick?: (event: FocusEvent) => void
}

export function createDropdownState(initial: DropdownState) {
    let open = $state(initial.open)

    function handleClick() {
        open = !open
    }

    function handleEscape(event: KeyboardEvent) {
        const key = event.key
        if (open && key === 'Escape') open = false
    }

    function handleOutsideClick(event: FocusEvent) {
        const element = event?.relatedTarget as HTMLElement
        if (open && !element?.closest('[role="menu"]')) open = false
    }

    function handleKeyDown(e: KeyboardEvent) {
        const element = e.currentTarget as HTMLElement
        const parentElement = element?.parentElement as HTMLElement
        const nextElement = element?.nextElementSibling as HTMLElement
        const previousElement = element?.previousElementSibling as HTMLElement
        const nextElementChild = nextElement?.firstElementChild as HTMLElement
        const parentElementSibling = parentElement?.previousElementSibling as HTMLElement

        const isArrowUp = e.key === 'ArrowUp'
        const isArrowDown = e.key === 'ArrowDown'

        if (isArrowUp) {
            if (isMenuitem(previousElement)) {
                focusOnLastChild(previousElement)
            } else if (parentElementSibling?.getAttribute('aria-haspopup') === 'menu') {
                parentElementSibling?.focus()
            }
        } else if (isArrowDown) {
            if (isMenuitem(nextElement)) {
                focusOnLastChild(nextElement)
            } else if (isMenuitem(nextElementChild)) {
                focusOnLastChild(nextElementChild)
            }
        }
    }

    function isMenuitem(element: HTMLElement | null): boolean {
        return element?.getAttribute('role') === 'menuitem'
    }

    function focusOnLastChild(element: HTMLElement | null) {
        let currentElement: HTMLElement | null = element
        while (currentElement) {
            const lastChild = currentElement.lastElementChild as HTMLElement
            if (!lastChild) {
                return currentElement.focus()
            }
            currentElement = lastChild instanceof HTMLElement ? lastChild : null
        }
    }

    return {
        ...initial,
        get open() {
            return open
        },
        handleClick,
        handleEscape,
        handleOutsideClick,
        handleKeyDown
    }
}

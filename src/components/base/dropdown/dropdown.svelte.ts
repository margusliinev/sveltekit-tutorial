export default function createDropdownState(initial: { open: boolean }) {
    let open = $state(initial.open)

    function toggle() {
        open = !open
    }

    return {
        ...initial,

        get open() {
            return open
        },

        toggle
    }
}

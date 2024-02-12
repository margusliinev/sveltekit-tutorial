/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'Inter Fallback']
            },
            screens: {
                xs: '560px',
                xxs: '440px'
            },
            width: {
                'screen-90': '90vw',
                'screen-80': '80vw',
                'screen-70': '70vw',
                'screen-60': '60vw',
                'screen-50': '50vw',
                'screen-40': '40vw',
                'screen-30': '30vw',
                'screen-20': '20vw',
                'screen-10': '10vw'
            },
            height: {
                'screen-90': '90vh',
                'screen-80': '80vh',
                'screen-70': '70vh',
                'screen-60': '60vh',
                'screen-50': '50vh',
                'screen-40': '40vh',
                'screen-30': '30vh',
                'screen-20': '20vh',
                'screen-10': '10vh'
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                navbar: 'var(--navbar)',

                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                    hover: 'var(--primary-hover)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                    hover: 'var(--secondary-hover)'
                },
                success: {
                    DEFAULT: 'var(--success)',
                    foreground: 'var(--success-foreground)',
                    hover: 'var(--success-hover)'
                },
                warning: {
                    DEFAULT: 'var(--warning)',
                    foreground: 'var(--warning-foreground)',
                    hover: 'var(--warning-hover)'
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                    hover: 'var(--destructive-hover)'
                },
                input: {
                    DEFAULT: 'var(--input)',
                    border: 'var(--input-border)',
                    focus: 'var(--input-focus)',
                    placeholder: 'var(--input-placeholder)',
                    invalid: 'var(--input-invalid)'
                },
                border: {
                    DEFAULT: 'var(--border)',
                    strong: 'var(--border-strong)'
                },
                card: {
                    DEFAULT: 'var(--card)',
                    hover: 'var(--card-hover)'
                }
            }
        }
    },
    plugins: []
}

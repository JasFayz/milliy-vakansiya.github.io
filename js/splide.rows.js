document.querySelectorAll('.type-carousel').forEach(carousel => new Splide(carousel, {
    type: 'slide',
    // height: '14rem',
    perPage: 1,
    perMove: 1,

    padding: 10,
    // rows: 2,
    // cols: 2,
    grid: {
        // You can define rows/cols instead of dimensions.
        dimensions: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
        gap: {
            row: '6px',
            col: '6px',
        },
    },
    breakpoints: {
        991: {
            height: '10rem',
            arrows: false,
            perPage: 1,
            grid: {
                // dimensions: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
                dimensions: [[2, 1], [2, 1], [2, 1], [2, 1], [2, 1], [2, 1]],
            },
            gap: {
                row: '6px',
                col: '6px',
            },
            pagination: false,

        },
    },
    pagination: false,

    gap: {
        row: '1rem',
        col: '1.5rem',
    },
}).mount(window.splide.Extensions));

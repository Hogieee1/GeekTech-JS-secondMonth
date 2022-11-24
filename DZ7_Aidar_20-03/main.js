class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        console.log('Машина заведена!')
    }
}

// ==========================

class Dodge extends Cars {

    static type = 'DODGE'

constructor(options) {
    super(options)

    this.engine = options.engine
}
}


const dodge = new Dodge ({
model: 'Charger',
color: 'silver',
wheels: 4,
engine: 'V8'
})

console.log('First Car')
console.log(dodge)
dodge.start()

// ===========================

class Chevrolet extends Cars {

    static type = 'CHEVROLET'


    constructor(options) {
        super(options)

        this.type = options.type
    }
}


const chevrolet = new Chevrolet ({
    model: 'Chevelle',
    color: 'red',
    wheels: 4,
    type: 'coupe'
})

console.log('Second Car')
console.log(chevrolet)
chevrolet.start()

// ===========================


class Pontiac extends Cars {

    static type = 'PONTIAC'

    constructor(options) {
        super(options)

        this.year = options.year
    }
}


const pontiac = new Pontiac ({
    model: 'GTO',
    color: 'darkblue',
    wheels: 4,
    year: 1966
})

console.log('Third Car')
console.log(pontiac)
pontiac.start()


// ==============================
// Trafic Light


class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

}


class Block extends Component {
    constructor(options) {
        super(options.selector)

        this.$element.style.width = options.width + 'px'
        this.$element.style.height = options.height + 'px'
        this.$element.style.background = options.bgc
        this.$element.style.marginTop = options.mTop + 'px'
        this.$element.style.borderRadius = options.bRadius + 'px'
        this.$element.style.display = options.display
        this.$element.style.justifyContent = options.jc
        this.$element.style.flexDirection = options.fd
    }
}


const block = new Block ({
    selector: '.block',
    width: 90,
    height: 300,
    bgc: '#0f163d',
    mTop: 150,
    bRadius: 50,
    display: 'flex',
    jc: 'space-around',
    fd: 'column'
})


// ============================

class Circle extends Component {
    constructor(options) {
        super(options.selector)

        this.$element.style.background = options.bgc
    }
}


let tfl = prompt('Введите цвета сфетофора: Красный, Желтый, Зеленый.').toLowerCase()

if (tfl === 'красный') {
    alert('STOP!')
    const red = new Circle ({
        selector: '#red',
        bgc: 'red',
    })
}

else if (tfl === 'желтый') {
    alert('BE READY!')
    const yellow = new Circle ({
        selector: '#yellow',
        bgc: 'yellow',
    })
}

else if (tfl === 'зеленый') {
    alert('GO!')
    const green = new Circle ({
        selector: '#green',
        bgc: 'green',
    })
}

else {
    alert("Введите только ниже перечисленные цвета!\nКрасный, Желтый, Зеленый.")
}




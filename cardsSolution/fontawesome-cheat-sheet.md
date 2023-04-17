#Manejo de iconos de FontAwesome

Instalacion de iconos en React:
[Guía oficial] (https://fontawesome.com/docs/web/use-with/react/)

```Node
npm i --save @fortawesome/fontawesome-svg-core

# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons

#For Components
npm i --save @fortawesome/react-fontawesome@latest

```

Como utilizar los iconos en React

[Referencia] (https://fontawesome.com/docs/web/add-icons/how-to)

```React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

<FontAwesomeIcon icon={faStar}/>

```
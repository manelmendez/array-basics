<script lang="ts">
import { ref } from 'vue'
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

export default {
  components: {
    CodeHighlight
  },
  setup() {
    const count = ref(0)
    const array = [-50, 30, 99, -7, 8, 102, 11]
    // EJERCICIO 1
    const getBiggest = (arr: any[]) => (
      arr.reduce((acc: number, el: number)=> acc > el ? acc : el)
    )
    const b = getBiggest(array)
    const max = Math.max(...array);
    // EJERCICIO 2
    const mascotas = [
      {name:"max", age:"10", type:"dog"},
      {name:"mia", age:"8", type:"cat"},
      {name:"nala", age:"5", type:"dog"}
    ]
    const indexado = mascotas.reduce((acc, el) => ({
      ...acc,
      [el.name]: el
    }),{})
    // EJERCICIO 3
    const anidado = [1, 2, [3, 4], 5, [6]]
    const plano = anidado.reduce((acc, el) => (
      acc.concat(el)
    ), [])
    return {
      count,
      getBiggest,
      b,
      max,
      indexado,
      plano
    }
  }
}
</script>

<template>
  <div class="h-full m-5 grid grid-cols-2 grid-flow-row gap-4">
<!-- EJERCICIO 1 -->
    <div>
      <h2><b>Ejercicio 1</b></h2>
      <p>ARRAY REDUCE. Obtener el numero mayor en un array pero iterando solo 1 vez</p>
      <code-highlight language="javascript">
      <pre>
      const getBiggest = (arr) => (
        arr.reduce((acc, el)=> acc > el ? acc : el)
      )
      const b = getBiggest([-50, 30, 99, -7, 8, 102, 11])
      //b={{ b }}
      /** Usando spread operator y Math.max */
      const max = Math.max(...arr);
      //max=102
      </pre>
      </code-highlight>
    </div>
    <!-- <div>
    <h2><b>Ejercicio 2</b></h2>
      <p>Saber si una palabra es un palíndromo (se lee igual por delante y por detrás)</p>
    <code-highlight>
    <pre>
    let isPalindrome = (word) => {
      let [length, result] = [word.length, true];
      for (let i = 0; i &lt; length / 2; i++) {
        if (word[i] !== word[length - 1 - i]) result = false;
      }
      return result;
    }
    </pre>
    </code-highlight>
    </div> -->
<!-- EJERCICIO 2 -->
    <div>
      <h2><b>Ejercicio 2</b></h2>
      <p>ARRAY REDUCE. Juntar arrays anidados</p>
      <code-highlight>
      <pre>
      const anidado = [1, 2, [3, 4], 5, [6]]
      const plano = anidado.reduce((acc, el) => (
        acc.concat(el)
      ), [])
      //plano = [1, 2, 3, 4, 5, 6]
      </pre>
      </code-highlight>
    </div>
<!-- EJERCICIO 3 -->
    <div>
      <h2><b>Ejercicio 3</b></h2>
      <p>ARRAY REDUCE. Indexar array de objetos</p>
      <code-highlight>
      <pre>
      const mascotas = [
        {name:"max", age:"10", type:"dog"},
        {name:"mia", age:"8", type:"cat"},
        {name:"nala", age:"5", type:"dog"}
      ]
      const indexado = mascotas.reduce((acc, el) => ({
        ...acc,
        [el.name]: el
      }))
      /**indexado = {
        "max":{"name":"max","age":"10","type":"dog"},
        "mia":{"name":"mia","age":"8","type":"cat"},
        "nala":{"name":"nala","age":"5","type":"dog"}
      }**/
      </pre>
      </code-highlight>
    </div>
<!-- EJERCICIO 4 -->
    <div>
      <h2><b>Ejercicio 4</b></h2>
      <p>ARRAY REDUCE. Indexar array de objetos</p>
      <code-highlight>
      <pre>
      const mascotas = [
        {name:"max", age:"10", type:"dog"},
        {name:"mia", age:"8", type:"cat"},
        {name:"nala", age:"5", type:"dog"}
      ]
      const indexado = mascotas.reduce((acc, el) => ({
        ...acc,
        [el.name]: el
      }))
      /**indexado = {
        "max":{"name":"max","age":"10","type":"dog"},
        "mia":{"name":"mia","age":"8","type":"cat"},
        "nala":{"name":"nala","age":"5","type":"dog"}
      }**/
      </pre>
      </code-highlight>
    </div>
  </div>
</template>

<style scoped>
/* a {
  color: #42b983;
} */

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>

<script lang="ts">
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
  };

  export let title: string;
  export let laravelVersion: string;
  export let phpVersion: string;
  export let todos: Todo[];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section class="prose p-4 min-w-full">
  <h3>Hello World</h3>
  <p>Laravel Version: {laravelVersion}</p>
  <p>PHP Version: {phpVersion}</p>
  <pre>{JSON.stringify(todos.slice(0, 3), null, 2)}</pre>
</section>

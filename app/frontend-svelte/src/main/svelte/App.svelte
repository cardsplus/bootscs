<script>
	import "smelte/src/tailwind.css";
	import Header from './pager/Header.svelte';
	import Sidebar from './pager/Sidebar.svelte';
	import Router from './pager/Router.svelte';
  	import Route from './pager/Route.svelte';
  	import RouteNotFound from './pager/RouteNotFound.svelte';	
	import Main from './Main.svelte';
	import Nutzer from './pages/Nutzer.svelte';
	import Projekt from './pages/Projekt.svelte';
	import Aufgabe from './pages/Aufgabe.svelte';
	import Uhrzeit from './pages/Uhrzeit.svelte';
	let open = false;
</script>

<Header bind:sidebar={open}/>
<Sidebar bind:open={open}/>
<Router>
	<Route path="/" component="{Main}" />
	<Route path="/nutzer" component="{Nutzer}" />
	<Route path="/projekt" component="{Projekt}" />
	<Route path="/aufgabe" component="{Aufgabe}" />
	<Route path="/uhrzeit" component="{Uhrzeit}" />
	<RouteNotFound>
		<h1>Sorry. Page not found.</h1>
	</RouteNotFound>
</Router>

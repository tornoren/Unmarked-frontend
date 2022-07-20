

<!--lage filen
legge inn koden vi vil ha
legge til prop - data komponenten skal få
erstatte originalkoden med komponenten
sørge for at den komponenten får riktig data inn-->
<script>
    export let user = {
        name: "missing name",     
    };

</script>

<p>Created by: <a href={'/amigos/'+user.slug.current}>{user.name}</a></p>

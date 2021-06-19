function createWindow(name, content) {
    document.getElementById('desktop').innerHTML += `<div class="window" draggable="true" title="${name}">
        <div class="window-top">
            <table style="width: 100%">
                <tr style="width: 100%">
                    <th></th>
                    <th>${name}</th>
                    <th style="text-align: end">
                        <button onclick="this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()" class="x">
                            X
                        </button>
                    </th>
                </tr>
            </table>
        </div>
        ${content}
    </div>`
}
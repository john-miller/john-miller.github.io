var me = new Gh3.User("john-miller");
var myRepos = new Gh3.Repositories(me);

var onReceive = function() {
	myRepos.repositories.forEach(function(repository) {
		$("#repositoryTable").find('tbody')
			.append($('<tr>')
					.append($('<td>')
							.append($('<a>')
									.text(repository.name)
									.attr('class', 'table-info')
									.attr('href', 'https://github.com/john-miller/' + repository.name))));
    });
}

/* Fetch the repos */
myRepos.fetch({}, {page:1, per_page:500, direction : "desc"}, onReceive);

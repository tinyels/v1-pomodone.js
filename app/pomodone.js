import { v1RootUrl} from './env';

export function transformToPomodoneJson(data){
	let stories = data[0];
	let defects = data[1];
	let tests = data[2];
	let tasks = data[3];
	var cards = [];
	cards = cards.concat(stories.map(convert("story-list")));
	cards = cards.concat(defects.map(convert("defect-list")));
	cards = cards.concat(tests.map(convert("test-list")));
	cards = cards.concat(tasks.map(convert("task-list")));
	return {
		"cards": cards,
		"lists": [
			{
				"uuid": "story-list",
				"source": "custom",
				"title": "Stories",
				"parent": "v1-projects",
				"default": true
			},
			{
				"uuid": "defect-list",
				"source": "custom",
				"title": "Defects",
				"parent": "v1-projects",
				"default": false
			},
			{
				"uuid": "test-list",
				"source": "custom",
				"title": "Tests",
				"parent": "v1-projects",
				"default": false
			},
			{
				"uuid": "task-list",
				"source": "custom",
				"title": "Tasks",
				"parent": "v1-projects",
				"default": false
			}
		],
		"projects": [
			{
				"uuid": "v1-projects",
				"source": "custom",
				"title": "VersionOne",
				"sortIndex": 1,
				"accessLevel": 1
			}
		],
	}

}

function convert(listName){
	return (item) => {
		var num = (item.Number)
		return ({
			title: (item.Name),
			uuid: num,
			parent: listName,
			description: (item.Description),
			"source": "custom",
			"permalink": `${v1RootUrl}/assetdetail.v1?Number=${num}`
		});
	}
}
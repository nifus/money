var r = require('rethinkdb');
r.connect('localhost', function (err, conn) {
    conn.use('money');
    r.table('category').insert([{
        "id": 3,
        "title": "\u0435\u0434\u0430",
        "created_at": "2016-10-05 16:10:01",
        "updated_at": "2016-10-05 16:10:01"
    }, {
        "id": 4,
        "title": "\u0430\u043f\u0442\u0435\u043a\u0430",
        "created_at": "2016-10-06 03:20:21",
        "updated_at": "2016-10-06 03:20:21"
    }, {
        "id": 5,
        "title": "\u0440\u0435\u043c\u043e\u043d\u0442",
        "created_at": "2016-10-06 03:21:41",
        "updated_at": "2016-10-06 03:21:41"
    }, {
        "id": 7,
        "title": "\u0441\u0432\u044f\u0437\u044c",
        "created_at": "2016-10-06 18:02:31",
        "updated_at": "2016-10-06 18:02:31"
    }, {
        "id": 8,
        "title": "\u0431\u0435\u043d\u0437\u0438\u043d",
        "created_at": "2016-10-08 03:52:24",
        "updated_at": "2016-10-08 03:52:24"
    }, {
        "id": 9,
        "title": "\u043e\u0434\u0435\u0436\u0434\u0430",
        "created_at": "2016-10-08 10:03:31",
        "updated_at": "2016-10-08 10:03:31"
    }, {
        "id": 10,
        "title": "\u043a\u043e\u0448\u043a\u0430",
        "created_at": "2016-10-09 09:52:15",
        "updated_at": "2016-10-09 09:52:15"
    }, {
        "id": 11,
        "title": "\u043f\u0430\u043c\u043f\u0435\u0440\u0441",
        "created_at": "2016-10-12 13:18:30",
        "updated_at": "2016-10-12 13:18:30"
    }, {
        "id": 12,
        "title": "\u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440",
        "created_at": "2016-10-12 13:18:52",
        "updated_at": "2016-10-12 13:18:52"
    }, {
        "id": 13,
        "title": "Авто",
        "created_at": "2016-10-12 13:18:52",
        "updated_at": "2016-10-12 13:18:52"
    }

    ]).run(conn, function () {
        console.log('end')
    });

    conn.close();

});

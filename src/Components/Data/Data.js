import React from 'react';

const Data = () => {
    //this is my class
    class Studesnt {
        id;
        name;
        profression;
        nationality;
        subjecs;
        skills;
        description;
        myObj
        task() {
            return `I have some skllis like ${this.skills.join(', ')}`;
        }
        constructor(id, name, profression, nationality, subjecs, skills, description, myObj) {
            this.id = id;
            this.name = name;
            this.profression = profression;
            this.nationality = nationality;
            this.subjecs = subjecs;
            this.skills = skills;
            this.description = description;
            this.myObj = myObj;
        }
    }

    const habib = new Studesnt(
        1,
        'Habibor Rahaman',
        'Full Stack Develper',
        'Baangladesh',
        ['Computer', 'Data Structure', 'Object Oriented Programmig', 'Operating System'],
        ['Programming', 'C++', 'JavaScaript', 'PHP', 'Python', 'TypScript'],
        `I am habibor rahaman. i'm self thought leraner. i'm a fullstack developer in both field like web and web application or software application. i expert to javaScript, python, php and there fornt and backend framework like laravel, node.js, django. i passionate about this.`,
        {
            BD: { id: 1, country: 'Bnagladesh', currency: 'Taka', symbol: '৳' },
            USA: { id: 2, country: 'Unitted state', currency: 'Dollar', symbol: '$' },
            AFN: { id: 3, country: 'Afghanistan Afghani', currency: 'AFN', symbol: '؋' },
            IND: { id: 4, country: 'India', currency: 'Rupee', symbol: '₹' },
            Euro: { id: 5, country: 'Germany', currency: 'Euro', symbol: '€' }
        }
    )

    // my 'habib' object destructuring here....
    const { id, name, profression, nationality, subjecs, skills, description, myObj } = habib;

    //this is my differnt keys values, find out funtion....
    const hello = (params) => {
        const m = (Object.values(params))
        const n = m.map((x) => x ? x : 'Empty Data');
        return n;
    }
    const h = hello(myObj);


    return (
        <div className=" p-2">
            <h2 className="mt-3">My details here:-</h2>
            <div className=" w-50 m-auto text-start">
                <p>id: {id}</p>
                <p>Name: {name}</p>
                <p>Profession: {profression}</p>
                <p>Nationality: {nationality}</p>
                <p>Favourit Subject : {subjecs.join(`, `)}</p>
                <p>Skills: {skills.join(`, `)}</p>
                <p>Description: {description}</p>

                <table className="table table-striped w-100 m-auto">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Country</th>
                            <th scope="col">Currency</th>
                            <th scope="col">Symbol</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{h.map((x) => <p className=" border p-2">{x.id ? x.id : 'Empty Data'}</p>)}</td>
                            <td>{h.map((x) => <p className=" border p-2">{x.country ? x.country : 'Empty Data'}</p>)}</td>
                            <td>{h.map((x) => <p className=" border p-2">{x.currency ? x.currency : 'Empty Data'}</p>)}</td>
                            <td>{h.map((x) => <p className=" border p-2">{x.symbol ? x.symbol : 'Empty Data'}</p>)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Data;
import React, { useEffect, useState, ChangeEventHandler, useRef, } from "react";
import axios from "axios";
import style from "@/styles/Register.module.scss";
import { format, isValid, parse } from 'date-fns';
import FocusTrap from 'focus-trap-react';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select';
import multiChoix from 'react-select/animated';



const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [genre, setGenre] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");
    const [ville, setVille] = useState("");
    const [pays, setPays] = useState("");
    const [department, setDepartment] = useState("");
    const [adresse, setAdresse] = useState("");
    const [numero, setNumero] = useState("");
    const [centreInteret, setCentreInteret] = useState("");
    const [pieceIdentite, setPieceIdentite] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(true);
    const [selected, setSelected] = useState<Date>();
    const [inputValue, setInputValue] = useState<string>('');
    const [isPopperOpen, setIsPopperOpen] = useState(false);
    const [value, setValue] = useState()
    const popperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);


    const animatedComponents = multiChoix();
    const options =
        [

            { value: 'sport', label: 'Sport' },
            { value: 'escalade', label: 'Escalade' },
            { value: 'natation', label: 'Natation' },
            { value: 'cyclisme', label: 'Cyclisme' },
            { value: 'equitation', label: 'Equitation' },
            { value: 'randonnée', label: 'Randonnée' },
            { value: 'ski', label: 'Ski' },
            { value: 'auto/moto', label: 'Auto/Moto' },
            { value: 'aviation', label: 'Aviation' },
            { value: 'pêche', label: 'Pêche' },
            { value: 'chasse', label: 'Chasse' },
            { value: 'camping', label: 'Camping' },
            { value: 'voile', label: 'Voile' },
            { value: 'plongée sous-marine', label: 'Plongée sous-marine' },
            { value: 'dance', label: 'Danse' },
            { value: 'yoga', label: 'Yoga' },
            { value: 'méditation', label: 'Méditation' },
            { value: 'bricolage', label: 'Bricolage' },
            { value: 'jardinage', label: 'Jardinage' },
            { value: 'peinture', label: 'Peinture' },
            { value: 'cinéma', label: 'Cinéma' },
            { value: 'musique', label: 'Musique' },
            { value: 'lecture', label: 'Lecture' },
            { value: 'cuisine', label: 'Cuisine' },
            { value: 'photographie', label: 'Photographie' },
            { value: 'voyage', label: 'Voyage' },
            { value: 'astronomie', label: 'Astronomie' },
            { value: 'botanique', label: 'Botanique' },
            { value: 'ornithologie', label: 'Ornithologie' },
            { value: 'zoologie', label: 'Zoologie' },
            { value: 'histoire', label: 'Histoire' },
            { value: 'archéologie', label: 'Archéologie' },
            { value: 'généalogie', label: 'Généalogie' },
            { value: 'philatélie', label: 'Philatélie' },
            { value: 'numismatique', label: 'Numismatique' },
            { value: 'jeux vidéo', label: 'Jeux vidéo' },
            { value: 'programmation', label: 'Programmation' },
            { value: 'robotique', label: 'Robotique' },
            { value: 'jeux de société', label: 'Jeux de société' },
            { value: 'modelisme', label: 'Modélisme' },
            { value: 'littérature', label: 'Littérature' },
            { value: 'théâtre', label: 'Théâtre' },
            { value: 'arts martiaux', label: 'Arts martiaux' },
            { value: 'boxe', label: 'Boxe' },
            { value: 'tir à l arc', label: 'Tir à l arc' },
            { value: 'pétanque', label: 'Pétanque' },
            { value: 'golf', label: 'Golf' },
            { value: 'natation synchronisée', label: 'Natation synchronisée' },
            { value: 'gymnastique', label: 'Gymnastique' },
            { value: 'patinage artistique', label: 'Patinage artistique' },
            { value: 'patinage de vitesse', label: 'Patinage de vitesse' },
            { value: 'escrime', label: 'Escrime' },
            { value: 'aviron', label: 'Aviron' }
        ]

    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
        null
    );

    const popper = usePopper(popperRef.current, popperElement, {
        placement: 'right-start',

        //modifer le style du popper
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],

                },
            },
        ],

    });

    const closePopper = () => {
        setIsPopperOpen(false);
        buttonRef?.current?.focus();
    };

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.currentTarget.value);
        const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
        if (isValid(date)) {
            setSelected(date);
        } else {
            setSelected(undefined);
        }
    };

    const handleButtonClick = () => {
        setIsPopperOpen(true);
    };

    const handleDaySelect = (date: Date) => {
        setSelected(date);
        if (date) {
            setInputValue(format(date, 'y-MM-dd'));
            closePopper();
        } else {
            setInputValue('');
        }
    };




    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.post("/api/register", {
                username,
                email,
                password,
                confirmPassword,
                genre,
                nom,
                prenom,
                age,
                ville,
                pays,
                department,
                adresse,
                numero,
                centreInteret,
                pieceIdentite,
            });

            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handlePieceIdentiteDrop = (event: any) => {
        setPieceIdentite(event.target.files[0]);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };



    return (


        <div className={style.container}>
            <button onClick={toggleModal} className={style.openButton}>
                {showModal ? "" : ""}

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    
            </button>
            {showModal && (
                <form onSubmit={handleSubmit} className={style.form}>

                    <section className={style.form_section}>

                        <div className="card">
                            <h3 className="form-section-title">Compte</h3>
                        </div>


                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />

                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={[options[4], options[5]]}
                            isMulti
                            options={options}
                           placeholder="Centre d'interet"
                        />


                    </section>

                    <section className={style.form_section}>
                    <div className="card">
                            <h3 className="form-section-title">Info personnelles</h3>
                        </div>
                        <input
                            className="champ_input"
                            type="email"
                            placeholder="Adresse mail"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className="champ_input"
                            type="text"
                            placeholder="Ville"
                            value={ville}
                            onChange={(event) => setVille(event.target.value)}
                        />
                        <input
                            className="champ_input"
                            type="text"
                            placeholder="Pays"
                            value={pays}
                            onChange={(event) => setPays(event.target.value)}
                        />
                        <input
                            className="champ_input"
                            type="text"
                            placeholder="Département"
                            value={department}
                            onChange={(event) => setDepartment(event.target.value)}
                        />
                        <input
                            className="champ_input"
                            type="text"
                            placeholder="Adresse"
                            value={adresse}
                            onChange={(event) => setAdresse(event.target.value)}
                        />
                        <PhoneInput
                            className="champ_input"
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            countryCallingCodeEditable={false}
                            defaultCountry="FR"
                        />

                        <input
                            className="champ_input"
                            type="text"
                            placeholder="Nom"
                            value={nom}
                            onChange={(event) => setNom(event.target.value)}
                        />
                        <input
                            className="champ_input"
                            type="text"
                            placeholder="Prénom"
                            value={prenom}
                            onChange={(event) => setPrenom(event.target.value)}
                        />

                        <select
                            className="champ_input_2"
                            id="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option value="">Sélectionnez votre genre</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                            <option value="autre">Autre</option>
                        </select>

                        <p className={style.form_section_title}>Pièce d'identité :</p>

                        <input
                            type="file"
                            id="pieceIdentite"
                            onDrop={handlePieceIdentiteDrop}
                            placeholder="Pièce d'identité"
                        />

                        <div ref={popperRef}>
                            <input

                                type="text"
                                placeholder={format(new Date(), 'dd-MM-yyyy')}
                                value={inputValue}
                                onChange={handleInputChange}
                                className="input-reset pa2 ma2 bg-white black ba"
                            />

                            <button
                                ref={buttonRef}
                                type="button"
                                className="pa2 bg-white button-reset ba"
                                aria-label="Pick a date"
                                onClick={handleButtonClick}
                            >
                                <span role="img" aria-label="calendar icon">
                                    📅
                                </span>
                            </button>
                        </div>
                        {isPopperOpen && (
                            <FocusTrap
                                active
                                focusTrapOptions={{
                                    initialFocus: false,
                                    allowOutsideClick: true,
                                    clickOutsideDeactivates: true,
                                    fallbackFocus: buttonRef.current
                                }}
                            >
                                <div
                                    tabIndex={-1}
                                    style={popper.styles.popper}
                                    className="dialog-sheet"
                                    {...popper.attributes.popper}
                                    ref={setPopperElement}
                                    role="dialog"
                                >
                                    <DayPicker
                                        initialFocus={isPopperOpen}
                                        mode="single"
                                        defaultMonth={selected}
                                        selected={selected}
                                        onSelect={handleDaySelect}
                                        captionLayout="dropdown"
                                        fromYear={1985} toYear={2050}
                                    />
                                </div>
                            </FocusTrap>
                        )}
                        <button type="submit" className={style.submitButton}>Register</button>

                        {message && <p className={style.message}>{message}</p>}
                    </section>

                </form>
            )}
        </div>
    );
};

export default Register;
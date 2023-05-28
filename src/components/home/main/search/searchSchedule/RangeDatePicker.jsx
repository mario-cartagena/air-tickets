const RangeDatePicker = () => {
    const [range, setRange] = useState([null, null]);
  
    const handleDateChange = (date, index) => {
      const newRange = [...range];
      newRange[index] = date;
      setRange(newRange);
    };
  
    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <DatePicker
            label="Fecha inicial"
            value={range[0]}
            onChange={(date) => handleDateChange(date, 0)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="Fecha final"
            value={range[1]}
            onChange={(date) => handleDateChange(date, 1)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </LocalizationProvider>
    );
  };
  
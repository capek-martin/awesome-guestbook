import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Guest } from "../types/Guest.types";

interface Props {
  onSubmit: SubmitHandler<any>;
  defaultValues?: any;
}

enum Departments {
  marketing = "Marketing",
  it = "IT",
  sales = "Sales",
  management = "Management",
}

export function GuestForm({ onSubmit, defaultValues }: Props) {
  const [agree, setAgree] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Guest>();
  const departmentValue = watch("department", "");

  useEffect(() => {
    reset({ ...defaultValues });
  }, [defaultValues, reset]);

  const handleChangeAgreement = () => setAgree(!agree);

  const handleResetForm = () => {
    setAgree(false);
    reset({ fullName: "", email: "", department: "" });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        handleResetForm();
      })}
      noValidate
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label={"Full name"}
            {...register("fullName", { required: "Name is required" })}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName?.message as string}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message as string}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Department"
              value={departmentValue}
              {...register("department", {
                required: "Department is required",
              })}
              error={Boolean(errors.department)}
            >
              {Object.entries(Departments).map(([key, value]) => (
                <MenuItem key={key} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="I agree to be added to the table"
            control={
              <Checkbox checked={agree} onChange={handleChangeAgreement} />
            }
          />
        </Grid>
        <Grid item>
          <Stack spacing={2} direction="row">
            <Button type="button" variant="outlined" onClick={handleResetForm}>
              Reset form
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!agree}
            >
              Add new visitor
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}

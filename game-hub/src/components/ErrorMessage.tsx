import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from '@chakra-ui/react';

interface Props {
  error: string;
}

function ErrorMessage({ error }: Props) {
  return (
    <Alert status="error" borderRadius={6} ml={1}>
      <AlertIcon />
      <Box>
        <AlertTitle>ERROR</AlertTitle>
        <AlertDescription fontSize="sm" display="inline-block" lineHeight="1">
          {error}
        </AlertDescription>
      </Box>
    </Alert>
  );
}

export default ErrorMessage;
